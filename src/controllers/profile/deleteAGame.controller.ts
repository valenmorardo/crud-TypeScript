import { Request, Response, NextFunction } from 'express';

import Videogame_Model from '@models/Videogames';
import { httpStatusCodes } from '@libs/httpStatusCodes';
import { CustomError } from '@utils/customError';

export const deleteAGame = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	const gameId = req.params.id;
	const userId = req.userId;

	Videogame_Model.findOne({
		where: {
			id: gameId,
			ownerUserId: userId,
		},
	})
		.then((game) => {
			if (!game)
				throw new CustomError('No posee ningun videojuego con ese ID.', 400);

			game.destroy();
			return res.status(201).send({
				game_deleted: true,
				msg: 'Videojuego eliminado correctamente.',
			});
		})
		.catch((error) => {
			error.error_message = error.message;
			error.mesage = 'Fallo a la hora de eliminar videojuego';
			return next(error);
		});
};
