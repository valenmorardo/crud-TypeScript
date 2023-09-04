import { Request, Response, NextFunction } from 'express';

import User_Model from '@models/User';
import { CustomError } from 'src/utils/customError';

export const emailExistenceValidator = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const emailBody: string = req.body.email;

	User_Model.findOne({
		where: {
			email: emailBody,
		},
	})
		.then((user) => {
			if (user) {
				throw new CustomError('Email already exists. Try to log in.', 400);
			}

			return next();
		})
		.catch((error: any) => {
			error.error_message = error.message;
			error.message = 'Fallo al crear el usuario.';
			return next(error);
		});
};
