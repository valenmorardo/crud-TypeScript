import { Request, Response, NextFunction } from 'express';
import User_Model from '@models/User';
import { CustomError } from '@utils/customError';
import { responseMsg } from '@libs/responseMsg';

export const deleteAUser = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const userId: string = req.params.id;

	User_Model.destroy({where: {id: userId}}).then(() => {
		return res.status(201).send({
			user_deleted: true,
			msg: responseMsg.userDeleted,
		});
	}).catch((error) => {
		error.error_message = error.message;
		error.message = responseMsg.failToDeleteUser;
		return next(error)
	});


	/* User_Model.findByPk(userId)
		.then((user) => {
			if (!user)
				throw new CustomError(responseMsg.noUserFoundMatchID, 400);

			user.destroy();
			return res.status(201).send({
				user_deleted: true,
				msg: responseMsg.userDeleted,
			});
		})
		.catch((error) => {
			error.error_message = error.message;
			error.message = responseMsg.failToDeleteUser;
            return next(error)
		}); */
};
