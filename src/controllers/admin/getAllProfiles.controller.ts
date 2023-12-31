import { Request, Response, NextFunction } from 'express';
import User_Model from '@models/User';
import { responseMsg } from '@libs/responseMsg';

export const getAllUsers = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	User_Model.findAll({
		attributes: {
			exclude: ['password'],
		},
	})
		.then((users) => {
			const allUsers = users.map((user) => {
				return user.dataValues;
			});
			return res.status(201).send({
				users_founded: true,
				users: allUsers,
			});
		})
		.catch((error) => {
			error.error_message = error.message;
			error.message = responseMsg.failToFoundUsers;
			return next(error);
		});
};
