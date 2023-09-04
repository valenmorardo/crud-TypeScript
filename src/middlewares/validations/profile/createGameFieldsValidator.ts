import { Request, Response, NextFunction } from 'express';
import { validations } from '@utils/allValidations';
import { IVideogameAttributes } from '@libs/typings/videogameAttributes';
import { CustomError } from '@utils/customError';

export const createGameFieldsValidator = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const { name, description, price, genres }: IVideogameAttributes = req.body;

	try {
		if (!name || !description || !price || !genres)
			throw new CustomError(
				'Faltan campos de datos del juego.Los campos necesarios son los siguientes:',
				400,
				{
					name: 'string name of videogame.',
					description: 'string description of videogame.',
					price: 'price of videogame.',
					genres: 'array genres of videogames.',
				},
			);
		validations.validateGameName(name);
		validations.validateDescription(description);
		validations.validatePrice(price);
		validations.validateGenres(genres);
		return next();
	} catch (error: any) {
		error.error_message = error.message;
		error.message = 'Fallo a la hora de crear videojuego.';
		return next(error);
	}
};
