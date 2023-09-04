import env from '@config/var-environments';

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IPayloadAuthToken } from '@libs/typings/payloadAuthToken';

import { CustomError } from '@utils/customError';
import { validations } from '../../../utils/allValidations';

export const authTokenValidator = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	const auth_token = req.header('auth-token');

	try {
		if (!auth_token) throw new CustomError('Access denied.', 400);
		validations.validateIsJWT(auth_token);

		const payload = jwt.verify(
			auth_token,
			env.JWT_SECRET || 'JWT_SECRET',
		) as IPayloadAuthToken;

		if (!payload.id) throw new CustomError('Access denied.', 400);
		validations.validateIsUUID(payload.id, 'Access denied');

		req.userId = payload.id;
		return next();
	} catch (error: any) {
		error.message_error = error.message;
		error.message = 'Fallo a la hora de logear.';
		return next(error);
	}
};
