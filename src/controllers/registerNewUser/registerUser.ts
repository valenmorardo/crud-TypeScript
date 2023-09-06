import { NextFunction, Request, Response } from 'express';
import { httpStatusCodes } from '@libs/httpStatusCodes';

import User_Model from '@models/User';
import { IUserAttributes } from '@libs/typings/userAttributes';
import { responseMsg } from '@libs/responseMsg';

export function registerUser(
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void {
	const { name, email }: IUserAttributes = req.body;
	const { encryptedPassword } = req;

	User_Model.create({
		name: name.trim(),
		email: email.trim(),
		password: encryptedPassword,
	})
		.then(() => {
			return res.status(201).send({
				user_created: true,
				message: responseMsg.success_register,
			});
		})
		.catch((error) => {
			error.error_message = error.message;
			error.message = responseMsg.error_defaultMSGRegister;
			return next(error);
		});
}
