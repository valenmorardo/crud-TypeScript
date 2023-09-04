import { Request, Response, NextFunction } from 'express';
import { httpStatusCodes } from '@libs/httpStatusCodes';

import Videogame_Model from '@models/Videogames';
import { CustomError } from '@utils/customError';

export const getMyGames = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
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
			console.log(games)
			if (!games.length)
				throw new CustomError('No se encontraron juegos de su propiedad.', 400);

				const videogames = games.map((game) => {
					return game.dataValues
				})
		
			return res.status(200).send({
				games_founded: true,
				videogames,
			
			})
		})
		.catch((error) => {
			error.error_message = error.message;
			error.message = 'Fallo a la hora de obtener videojuegos'
			return next(error)
		});
};
