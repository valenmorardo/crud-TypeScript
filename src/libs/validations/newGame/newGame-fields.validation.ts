import { Request, Response, NextFunction } from 'express';
import validator from 'validator';
import { httpStatusCodes } from '@libs/httpStatusCodes';

export const validateNewGameFields = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	const { name, description, price, genres } = req.body;

	if (!validator.isAscii(name.trim())) {
		return res.status(400).send({
			message:
				'El nombre del vidoejuego solo debe contener letra y/o numeros. Y es un campo obligatorio',
			status: {
				code: 400,
				msg: httpStatusCodes[400],
			},
		});
	}

	if (!validator.isAscii(description.trim())) {
		return res.status(400).send({
			message:
				'La descripcion del vidoejuego solo debe contener letra y/o numeros. Y es un campo obligatorio',
			status: {
				code: 400,
				msg: httpStatusCodes[400],
			},
		});
	}

	if (!validator.isInt(price.toString())) {
		return res.status(400).send({
			message:
				'El precio debe ser indicado en formato numerico. Y es un campo obligatorio',
			status: {
				code: 400,
				msg: httpStatusCodes[400],
			},
		});
	}

	if (price <= 0) {
		return res.status(400).send({
			message: 'El precio minimo es de $1',
			status: {
				code: 400,
				msg: httpStatusCodes[400],
			},
		});
	}

	if (!Array.isArray(genres)) {
		return res.status(400).send({
			message: 'EL dato recibido no cumple con el formato correcto.',
			status: {
				code: 400,
				msg: httpStatusCodes[400],
			},
		});
	}

	if (genres.length === 0) {
		return res.status(400).send({
			message: 'Debe escojer minimo un genero.',
			status: {
				code: 400,
				msg: httpStatusCodes[400],
			},
		});
	}

	return next();
};
