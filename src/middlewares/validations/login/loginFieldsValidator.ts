import { Request, Response, NextFunction } from 'express';

import { validations } from '@utils/allValidations';
import { IUserAttributes } from '@libs/typings/userAttributes';
import { CustomError } from '@utils/customError';

export const loginFieldsValidator = (
	req: Request,
	_res: Response,
	next: NextFunction,
): void => {
	const { email, password }: IUserAttributes = req.body;
	try {
		if (!email || !password)
			throw new CustomError(
				'Faltan campos de datos. Los siguientes campos son requeridos:',
				400,
				{ email: 'your email', password: 'your password' },
			);
		validations.validateEmail(email);
		return next();
	} catch (error: any) {
		error.error_message = error.message;
		error.additionalData = error.data;
		error.message = 'Fallo al logear.';
		return next(error);
	}
};
