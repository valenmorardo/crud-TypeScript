import env from '@config/var-environments';

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IPayloadAuthToken } from '@libs/typings/payloadAuthToken';
import { validateIsJWT } from '@utils/functionsValidations/validateJWT';
import { CustomError } from '@utils/customError';

export const authTokenValidator = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	const auth_token = req.header('auth-token');

	try {
		if (!auth_token) throw new CustomError('Access denied.', 400);
		validateIsJWT(auth_token);

		const payload = jwt.verify(
			auth_token,
			env.JWT_SECRET || 'JWT_SECRET',
		) as IPayloadAuthToken;

		if (!payload.id) throw new CustomError('Access denied.', 400);

		req.userId = payload.id;
	} catch (error: any) {
		error.message_error = error.message;
		error.message = 'Access denied.';
		return next(error);
	}

	return next();
};
