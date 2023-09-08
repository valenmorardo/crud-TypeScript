import { Request, Response, NextFunction } from 'express';

import { CustomError } from '@utils/customError';
import { IUserAttributes } from '@libs/typings/userAttributes';
import { responseMsg } from '@libs/responseMsg';
import Admin_Model from '@models/Admin';

export const addAdmin = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	const userId = req.body.userId;

	Admin_Model.create({
		userId,
	})
		.then((newAdmin) => {
			return res.status(201).send({
				msg: responseMsg.newAdmin,
			});
		})
		.catch((error) => {
			error.error_message = error.message;
			error.message = responseMsg.error_newAdminfail;
			return next(error);
		});
};
