import { Request, Response, NextFunction } from 'express';

import { validations } from '@utils/allValidations';
import { IUserAttributes } from '@libs/typings/userAttributes';
import { CustomError } from '@utils/customError';
import { responseMsg } from '@libs/responseMsg';

export const loginFieldsValidator = (
	req: Request,
	_res: Response,
	next: NextFunction,
): void => {
	const { email, password }: IUserAttributes = req.body;
	try {
		if (!email || !password)
			throw new CustomError(
				responseMsg.error_MissingData,
				400,
				responseMsg.loginDataRequired,
			);
		validations.validateEmail(email);
		return next();
	} catch (error: any) {
		error.error_message = error.message;
		error.additionalData = error.data;
		error.message = responseMsg.error_defaultMSGLogin;
		return next(error);
	}
};
