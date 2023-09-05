import { Request, Response, NextFunction } from 'express';
import User_Model from '@models/User';
import { CustomError } from '@utils/customError';
import { IUserAttributes } from '@libs/typings/userAttributes';

export const handlerIsAdmin = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	const { isAdmin }: IUserAttributes = req.body;
	const userId = req.params.id;

	User_Model.update({ isAdmin }, { where: { id: userId } })
		.then(() => {
			return res.status(201).send({
				user_isAdmin_updated: true,
				message: 'usuario actualizado correctamente.',
			});
		})
		.catch((error) => {
			error.error_message = error.message;
			error.message = 'Fallo a la hora de modificar isAdmin';
			return next(error);
		});
};
