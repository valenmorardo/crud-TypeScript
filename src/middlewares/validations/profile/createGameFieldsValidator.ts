import { Request, Response, NextFunction } from 'express';
import { validations } from '@utils/allValidations';
import { IVideogameAttributes } from '@libs/typings/videogameAttributes';
import { CustomError } from '@utils/customError';
import { responseMsg } from '@libs/responseMsg';

export const createGameFieldsValidator = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const { name, description, price, genres }: IVideogameAttributes = req.body;

	try {
		if (!name || !description || !price || !genres)
			throw new CustomError(
				responseMsg.error_gameMissingData,
				400,
				responseMsg.gameDataRequired,
			);
		validations.validateGameName(name);
		validations.validateDescription(description);
		validations.validatePrice(price);
		validations.validateGenres(genres);
		return next();
	} catch (error: any) {
		error.error_message = error.message;
		error.additionalData = error.data;
		error.message = responseMsg.error_failCreateGame;
		return next(error);
	}
};
