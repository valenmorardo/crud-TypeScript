import { Request, Response, NextFunction } from 'express';

import { IUserAttributes } from '@libs/typings/userAttributes';

import { validations } from '../../../utils/allValidations';
import { CustomError } from '@utils/customError';

export const registerFieldsValidator = (
	req: Request,
	_res: Response,
	next: NextFunction,
): void => {
	const { name, email, password }: IUserAttributes = req.body;
	try {
		if (!name || !email || !password)
			throw new CustomError(
				'Faltan campos de datos. Los siguientes campos son requeridos:',
				400,
				{ name: 'your name', email: 'your email', password: 'your password' },
			);
		validations.validateEmail(email);
		validations.validateUserName(name);
		validations.validatePassword(password);
		return next();
	} catch (error: any) {
		error.error_message = error.message;
		error.additionalData = error.data;
		error.message = 'Fallo al crear el usuario';
		return next(error);
	}
};
