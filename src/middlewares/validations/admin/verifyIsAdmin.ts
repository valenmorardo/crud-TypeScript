import { Request, Response, NextFunction } from 'express';
import { httpStatusCodes } from '@libs/httpStatusCodes';

import User_Model from '@models/User';
import { CustomError } from '@utils/customError';

export const verifyIsAdmin =  (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	const userId = req.userId;

	User_Model.findByPk(userId).then((user) => {
		if(!user?.dataValues.isAdmin) throw new CustomError('You Dont have permisson to access here.', 400);
		return next()
	}).catch((error) => {
		error.error_message = error.message;
		error.message = "Access Denied."
		return next(error)
	})

	
};
