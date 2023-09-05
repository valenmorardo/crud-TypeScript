import validator from 'validator';
import { CustomError } from '../customError';

import { genres_videogames } from '@libs/typings/videogameAttributes';
import { responseMsg } from '@libs/responseMsg';

export const validateGenres = (genres: Array<genres_videogames>): boolean => {
	if (!Array.isArray(genres))
		throw new CustomError(
			responseMsg.error_gameGenresIsntArray,
			400,
		);
	if (!genres.length)
		throw new CustomError(responseMsg.error_gameGenresEmpty, 400);
	if (
		!genres.every((genre) =>
			Object.values(genres_videogames).includes(genre as genres_videogames),
		)
	) {
		throw new CustomError(responseMsg.error_gameGenresInvalid, 400);
	}

	return true;
};
