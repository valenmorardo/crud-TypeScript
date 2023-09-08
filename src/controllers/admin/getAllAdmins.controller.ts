import { Request, Response, NextFunction } from 'express';
import Admin_Model from '@models/Admin';
import User_Model from '@models/User';
import { responseMsg } from '@libs/responseMsg';
import { CustomError } from '@utils/customError';

export const getAllAdmins = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	Admin_Model.findAll({
		include: {
			model: User_Model,
			attributes: ['name', 'email'],
		},
	})
		.then((admins) => {
			const allAdmins = admins.map((admin) => {
				return admin.dataValues;
			});
			return res.status(201).send({
				admins_founded: true,
				admins: allAdmins,
			});
		})
		.catch((error) => {
			error.error_message = error.message;
			error.message = responseMsg.failToFoundAdmins;
			return next(error);
		});
};
