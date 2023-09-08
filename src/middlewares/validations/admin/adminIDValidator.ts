import { Request, Response, NextFunction } from 'express';
import { validations } from '@utils/allValidations';
import { responseMsg } from '@libs/responseMsg';
import User_Model from '@models/User';

export const adminIDValidator = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const userId: string = req.params.userId;
	const adminId: string = req.params.adminId;

	try {
		validations.validateIsUUID(userId ? userId : adminId);

		return next();
	} catch (error: any) {
		error.error_message = error.message;
		error.message = responseMsg.failCheckID;
		return next(error);
	}
};
