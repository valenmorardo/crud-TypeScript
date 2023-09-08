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
		.then((dataRemoved) => {
			if (!dataRemoved) throw new CustomError(responseMsg.error_noAdminID, 400);
			return res.status(201).send({
				admin_deleted: true,
				msg: responseMsg.adminDeleted,
			});
		})
		.catch((error) => {
			error.error_message = error.message;
			error.message = responseMsg.failToAddAdmin;
			return next(error);
		});
};
