import { Request, Response, NextFunction } from 'express';
import { httpStatusCodes } from '@libs/httpStatusCodes';

import User_Model from '@models/User';
import { CustomError } from '@utils/customError';
import { responseMsg } from '@libs/responseMsg';

export const verifyIsAdmin = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	const userId = req.userId;

	User_Model.findByPk(userId)
		.then((user) => {
			if (!user?.dataValues.isAdmin)
				throw new CustomError(responseMsg.accesDeniedADM, 400);
			return next();
		})
		.catch((error) => {
			error.error_message = error.message;
			error.message = responseMsg.accesDeniedDefault;
			return next(error);
		});
};
