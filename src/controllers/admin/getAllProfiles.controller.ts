import { Request, Response, NextFunction } from 'express';
import User_Model from '@models/User';

export const getAllProfiles = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void=> {
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
			error.error_messgae = error.message;
			error.message = 'ADMIN SITE || Fallo a la hora de buscar usuarios.';
			return next(error);
		});
};
