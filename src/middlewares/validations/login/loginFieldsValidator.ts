import { Request, Response, NextFunction } from 'express';

import { validations } from '@utils/allValidations';
import { IUserAttributes } from '@libs/typings/userAttributes';

export const loginFieldsValidator = (
	req: Request,
	_res: Response,
	next: NextFunction,
): void => {
	const { email }: IUserAttributes = req.body;
	try {
		validations.validateEmail(email);
		return next();
	} catch (error: any) {
		error.error_message = error.message;
		error.message = 'Fallo al logear.';
		return next(error);
	}
};