import { Request, Response, NextFunction } from 'express';
import { IUserAttributes } from '@libs/typings/userAttributes';

import User_Model from '@models/User';
import { CustomError } from '@utils/customError';
import bcrypt from 'bcryptjs';
import { responseMsg } from '@libs/responseMsg';

export const loginDataValidator = (
	req: Request,
	_res: Response,
	next: NextFunction,
): void => {
	const { email, password }: IUserAttributes = req.body;
	const emailBody = email;
	const passwordBody = password;

	User_Model.findOne({
		where: {
			email: emailBody,
		},
	})
		.then(async (user) => {
			if (!user)
				throw new CustomError(
					responseMsg.error_emailDoesntExists,
					400,
				);

			const passwordCheck: boolean = await bcrypt.compare(
				passwordBody,
				user.dataValues.password,
			);

			if (!passwordCheck)
				throw new CustomError(responseMsg.error_wrongData, 400);
			req.userId = user.dataValues.id;
            
			return next();
		})
		.catch((error: any) => {
			error.error_message = error.message;
			error.message = responseMsg.error_defaultMSGLogin;
			return next(error);
		});
};
