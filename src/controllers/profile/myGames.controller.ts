import { Request, Response, NextFunction } from 'express';


import Videogame_Model from '@models/Videogames';
import { CustomError } from '@utils/customError';
import { responseMsg } from '@libs/responseMsg';

export const getMyGames = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	const id = req.userId;

	Videogame_Model.findAll({
		where: {
			ownerUserId: id,
		},
		attributes: {
			exclude: ['ownerUserId'],
		},
	})
		.then((games) => {
			if (!games.length)
				throw new CustomError(responseMsg.notFoundGamesInProperty, 400);

			const videogames = games.map((game) => {
				return game.dataValues;
			});

			return res.status(200).send({
				games_founded: true,
				videogames,
			});
		})
		.catch((error) => {
			error.error_message = error.message;
			error.message = responseMsg.error_obtainUserGames;
			return next(error);
		});
};
