import env from '@config/var-environments';

import { httpStatusCodes } from '@libs/httpStatusCodes';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IPayloadAuthToken } from '@libs/typings/payload-auth-token';

export const verifyAuthToken = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	const auth_token = req.header('auth-token');

	if (!auth_token) {
		return res.status(401).send({
			message: 'Access denied. You must to be log in !!',
			status: {
				code: 401,
				msg: httpStatusCodes[401],
			},
		});
	}

	try {
		const payload = jwt.verify(
			auth_token,
			env.JWT_SECRET || 'JWT_SECRET',
		) as IPayloadAuthToken;

		req.userId = payload.id;

		console.log('token autorizado');
	} catch (error) {
		console.log(error);
		return res.status(401).send({
			message: 'Access Denied.',
			status: {
				code: 401,
				msg: httpStatusCodes[401],
			},
		});
	}

	return next();
};
