import { Request, Response, NextFunction } from 'express';

import User_Model from '@models/User';
import { CustomError } from 'src/utils/customError';
import { responseMsg } from '@libs/responseMsg';

export const emailExistenceValidator = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const emailBody: string = req.body.email;

	User_Model.findOne({
		where: {
			email: emailBody,
		},
	})
		.then((user) => {
			if (user) {
				throw new CustomError(responseMsg.error_emailAlreadyExists, 400);
			}

			return next();
		})
		.catch((error: any) => {
			error.error_message = error.message;
			error.message = responseMsg.error_defaultMSGRegister;
			return next(error);
		});
};
