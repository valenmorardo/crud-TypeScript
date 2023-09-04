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
		if (!auth_token) throw new CustomError('Fallo en la autenticacion', 400);
		validations.validateIsJWT(auth_token);

		const payload = jwt.verify(
			auth_token,
			env.JWT_SECRET || 'JWT_SECRET',
		) as IPayloadAuthToken;

		if (!payload.id) throw new CustomError('Fallo en la autenticacion', 400);
		validations.validateIsUUID(payload.id, 'Fallo en la autenticacion');

		req.userId = payload.id;
		return next();
	} catch (error: any) {
		error.error_message = error.message;
		error.message = 'Access denied. Try to log in again';
		return next(error);
	}
};
