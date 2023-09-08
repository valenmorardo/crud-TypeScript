import { Request, Response, NextFunction } from 'express';
import Admin_Model from '@models/Admin';
import { CustomError } from '@utils/customError';
import { responseMsg } from '@libs/responseMsg';

export const removeAdmin = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const adminId: string = req.params.adminId;

	Admin_Model.destroy({ where: { adminId } })
		.then(() => {
			return res.status(201).send({
				admin_deleted: true,
				msg: 'admin deleted',
			});
		})
		.catch((error) => {
			error.error_message = error.message;
			error.message = "fallo a la hora de remover administrador";
			return next(error);
		});
};
