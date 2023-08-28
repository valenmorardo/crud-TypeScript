import { Request, Response, NextFunction } from 'express';
import { httpStatusCodes } from '@libs/httpStatusCodes';
import validator from 'validator';

export const validateLogin = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	const { email, password } = req.body;

	if (!validator.isEmail(email)) {
		return res.status(400).send({
			error_message: 'El email no esta en formato correcto.',
			status: {
				code: 400,
				message: httpStatusCodes[400],
			},
		});
	}

	if (!validator.isEmpty(password)) {
		return res.status(400).send({
			error_message: 'la contraseña es obligatoria',
			status: {
				code: 400,
				message: httpStatusCodes[400],
			},
		});
	}

	return next();
};
