import { NextFunction, Request, Response } from 'express';
import { httpStatusCodes } from '@libs/httpStatusCodes';

import User_Model from '@models/User';
import { IUserAttributes } from '@libs/typings/userAttributes';

export function registerUser(
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void {

	const { name, email }: IUserAttributes = req.body;
	const { encryptedPassword } = req;

	User_Model.create({
		name: name.trim(),
		email,
		password: encryptedPassword,
	})
		.then(() => {
			return res.status(201).send({
				user_created: true,
				message: 'El usuario se creo correctamente',
			});
		})
		.catch((error) => {
			error.error_message = error.message;
			error.message = 'Fallo al crear el usuario.';
			return next(error)
		});
}
