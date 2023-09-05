import { Request, Response, NextFunction } from 'express';

import User_Model from '@models/User';
import { CustomError } from '@utils/customError';
import { validations } from '../../../utils/allValidations';
import { responseMsg } from '@libs/responseMsg';

export const payloadIDExcistenseValidator = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<Response | void> => {
	const userId = req.userId;

	User_Model.findByPk(userId)
		.then((user) => {
			if (!user) throw new CustomError(responseMsg.error_authFail, 400);

			return next();
		})
		.catch((error) => {
			error.error_message = error.message;
			error.message = responseMsg.error_accessDenied;
			return next(error);
		});
};
