import { Request, Response, NextFunction } from 'express';

import { IUserAttributes } from '@libs/typings/userAttributes';

import { validations } from '../../utils/allValidations';

export const validateRegisterFields = (
	req: Request,
	res: Response,
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
		error.message = 'Fallo al crear el usuario';
		return next(error);
	}
};
