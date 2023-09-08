import { Request, Response, NextFunction } from 'express';
import { CustomError } from '@utils/customError';
import { responseMsg } from '@libs/responseMsg';

import Videogame_Model from '@models/Videogames';
import { IVideogameAttributes } from '@libs/typings/videogameAttributes';
import { validations } from '../../utils/allValidations';

export const updateAGame = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const gameId: string = req.params.id;
	const { name, price, description, genres }: IVideogameAttributes = req.body;

	try {
		if (!name || !description || !price || !genres)
			throw new CustomError(
				responseMsg.error_MissingData,
				400,
				responseMsg.gameDataRequired,
			);
		validations.validateGameName(name);
		validations.validateDescription(description);
		validations.validatePrice(price);
		validations.validateGenres(genres);
	} catch (error: any) {
		error.error_message = error.message;
		error.message = responseMsg.failUpdateGame;
		return next(error);
	}

	Videogame_Model.update(
		{ name, price, description, genres },
		{ where: { id: gameId } },
	)
		.then((resultado) => {
			if (!resultado) throw new CustomError(responseMsg.noGameMatchID, 400);
			return res.status(201).send({
				user_isAdmin_updated: true,
				message: responseMsg.updateGameSuccess,
			});
		})
		.catch((error) => {
			error.error_message = error.message;
			error.message = responseMsg.failUpdateGame;
			return next(error);
		});
};
