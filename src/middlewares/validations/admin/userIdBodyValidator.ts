import { Request, Response, NextFunction } from 'express';
import { validations } from '@utils/allValidations';
import { responseMsg } from '@libs/responseMsg';
import User_Model from '@models/User';
import { CustomError } from '@utils/customError';

export const userIdBodyValidator = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const userId = req.body.userId;

	try {
		validations.validateIsUUID(userId);

		const userFound = User_Model.findByPk(userId);
		if (!userFound)
			throw new CustomError('No se encontro un usuario con esa ID.', 400);

		return next();
	} catch (error: any) {
		error.error_message = error.message;
		error.message = responseMsg.failToDeleteUser;
		return next(error);
	}
};
