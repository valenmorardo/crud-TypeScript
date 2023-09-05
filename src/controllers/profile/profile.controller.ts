import { NextFunction, Request, Response } from 'express';

import User_Model from '@models/User';
import { responseMsg } from '@libs/responseMsg';

export const profileUser = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	const id = req.userId;

	User_Model.findByPk(id, {
		attributes: {
			exclude: ['password', 'isAdmin'],
		},
	})
		.then((user) => {
			return res.status(200).send({
				user_founded: true,
				user_profile: user,
			});
		})
		.catch((error) => {
			error.error_message = error.message;
			error.message = responseMsg.error_profileData;
			return next(error);
		});
};
