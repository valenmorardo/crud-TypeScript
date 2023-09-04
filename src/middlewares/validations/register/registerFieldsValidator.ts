import { Request, Response, NextFunction } from 'express';

import { IUserAttributes } from '@libs/typings/userAttributes';

import { validations } from '../../../utils/allValidations';

export const registerFieldsValidator = (
	req: Request,
	_res: Response,
	next: NextFunction,
): void => {
	const { name, email, password }: IUserAttributes = req.body;
	try {
		validations.validateEmail(email);
		validations.validateName(name);
		validations.validatePassword(password);
		return next();
	} catch (error: any) {
		error.error_message = error.message;
		error.data = error.data;
		error.message = 'Fallo al crear el usuario';
		return next(error);
	}
};
