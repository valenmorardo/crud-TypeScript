import { Request, Response, NextFunction } from 'express';
import { httpStatusCodes } from '@libs/httpStatusCodes';
import validator from 'validator';

export function validateRegisterFields(
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void {
	
	const { name, email, password } = req.body;

	const patron: RegExp = /^[A-Za-z]+(\s[A-Za-z]+)*$/;

	if (!patron.test(name.trim())) {
		return res.status(400).send({
			error_message: 'El nombre no es valido. Solo debe contener letras.',
			status: {
				code: 400,
				message: httpStatusCodes[400],
			},
		});
	}

	if (!validator.isEmail(email)) {
		return res.status(400).send({
			error_message: 'El email no es valido',
			status: {
				code: 400,
				message: httpStatusCodes[400],
			},
		});
	}

	if (!validator.isAlphanumeric(password)) {
		return res.status(400).send({
			error_message:
				'la contraseña no es valida. Debe contener letras y/o numeros.',
			status: {
				code: 400,
				message: httpStatusCodes[400],
			},
		});
	}

	return next();
}
