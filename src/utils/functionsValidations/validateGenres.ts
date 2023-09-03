import validator from 'validator';
import { CustomError } from '../customError';

import { genres_videogames } from '@libs/typings/videogameAttributes';

export const validateGenres = (genres: Array<genres_videogames>): boolean => {
	if (!Array.isArray(genres))
		throw new CustomError(
			'El o los generos deben estar dentro de un array',
			400,
		);
	if (!genres.length)
		throw new CustomError('Debe haber al menos un genero.', 400);
	if (
		!genres.every((genre) =>
			Object.values(genres_videogames).includes(genre as genres_videogames),
		)
	) {
		throw new CustomError('Uno o mas generos no son validos', 400);
	}

	return true;
};
