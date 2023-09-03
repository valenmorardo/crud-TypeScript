import { Request, Response, NextFunction } from 'express';
import validator from 'validator';
import { httpStatusCodes } from '@libs/httpStatusCodes';

import {
	IVideogameAttributes,
	genres_videogames,
} from '../../typings/videogame-attributes';

import { CustomError } from 'src/utils/custom-error';

export const validateGameFields = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	const { name, description, price, genres }: IVideogameAttributes = req.body;

	///////////// NAME \\\\\\\\\\\\\\\\\\\\\\\\\\\
	if (typeof name !== 'string') {
		throw new CustomError('El nombre debe estar en formato texto', 400);
	}
	if (!validator.isAscii(name)) {
		return res.status(400).send({
			error_message:
				'El nombre contiene caracteres invalidos. Solo se permiten letras y/o numeros.',
			status: {
				code: 400,
				msg: httpStatusCodes[400],
			},
		});
	}

	/////////////// DESCRIPTION \\\\\\\\\\\\\\\\\\
	if (typeof description !== 'string') {
		return res.status(400).send({
			error_message: 'La descripcion debe estar en formato texto.',
			status: {
				code: 400,
				msg: httpStatusCodes[400],
			},
		});
	}
	if (!validator.isAscii(description)) {
		return res.status(400).send({
			error_message:
				'La descripcion contiene caracteres invalidos. Solo se permiten letras y/o numeros.',
			status: {
				code: 400,
				msg: httpStatusCodes[400],
			},
		});
	}

	/////////// PRICE \\\\\\\\\\\
	if (typeof price !== 'number') {
		return res.status(400).send({
			error_message: 'El precio debe estar en formato numero.',
			status: {
				code: 400,
				msg: httpStatusCodes[400],
			},
		});
	}
	if (price <= 0.9) {
		return res.status(400).send({
			error_message: 'El precio minimo es de 1$',
			status: {
				code: 400,
				msg: httpStatusCodes[400],
			},
		});
	}

	/////// GENEROS \\\\\\\\\\\
	if (!Array.isArray(genres)) {
		return res.status(400).send({
			error_message: 'Los generos deben estar en un array',
			status: {
				code: 400,
				msg: httpStatusCodes[400],
			},
		});
	}

	if (
		!genres.every((genre) =>
			Object.values(genres_videogames).includes(genre as genres_videogames),
		)
	) {
		return res.status(400).send({
			error_message: 'uno o mas generos no son validos.',
			status: {
				code: 400,
				msg: httpStatusCodes[400],
			},
		});
	}
	return next();
};
