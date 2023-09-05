import { Request, Response, NextFunction } from 'express';
import User_Model from '@models/User';
import { CustomError } from '@utils/customError';

export const deleteAUser = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const userId: string = req.params.id;

	User_Model.findByPk(userId)
		.then((user) => {
			if (!user)
				throw new CustomError('No se encontro usuario con ese ID.', 400);

			user.destroy();
			return res.status(201).send({
				user_deleted: true,
				msg: 'usuario eliminado correctamente.',
			});
		})
		.catch((error) => {
			error.error_message = error.message;
			error.message = 'ADMIN SITE || Fallo a la hora de eliminar usuario';
            return next(error)
		});
};
