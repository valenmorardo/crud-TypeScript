import { Request, Response, NextFunction } from 'express';
import User_Model from '@models/User';
import { CustomError } from '@utils/customError';
import { responseMsg } from '@libs/responseMsg';

export const deleteAUser = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const userId: string = req.params.userId;

	User_Model.destroy({ where: { id: userId } })
		.then((dataRemoved) => {
			if (!dataRemoved) throw new CustomError('No se encontro esa ID.', 400);
			return res.status(201).send({
				user_deleted: true,
				msg: responseMsg.userDeleted,
			});
		})
		.catch((error) => {
			error.error_message = error.message;
			error.message = responseMsg.failToDeleteUser;
			return next(error);
		});
};
