import { Request, Response, NextFunction } from 'express';

import { IUserAttributes } from '@libs/typings/userAttributes';

import { validations } from '../../../utils/allValidations';
import { CustomError } from '@utils/customError';
import { responseMsg } from '@libs/responseMsg';

export const registerFieldsValidator = (
	req: Request,
	_res: Response,
	next: NextFunction,
): void => {
	const { name, email, password }: IUserAttributes = req.body;
	try {
		if (!name || !email || !password)
			throw new CustomError(
				responseMsg.error_MissingData,
				400,
				responseMsg.registerDataRequired,
			);
		validations.validateEmail(email);
		validations.validateUserName(name);
		validations.validatePassword(password);
		return next();
	} catch (error: any) {
		error.error_message = error.message;
		error.additionalData = error.data;
		error.message = responseMsg.error_defaultMSGRegister;
		return next(error);
	}
};
