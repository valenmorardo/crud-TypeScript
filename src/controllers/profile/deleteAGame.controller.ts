import { Request, Response, NextFunction } from 'express';

import Videogame_Model from '@models/Videogames';
import { httpStatusCodes } from '@libs/httpStatusCodes';

export const deleteAGame = async (
	req: Request,
	res: Response,
	_next: NextFunction,
): Promise<Response> => {
	const gameId = req.params.id;
	const userId = req.userId;

	const gameToDelete = await Videogame_Model.findOne({
		where: {
			id: gameId,
			ownerUserId: userId,
		},
	});

	if (!gameToDelete) {
		return res.status(404).send({
			message: 'No posee un juego con ese ID.',
			status: {
				code: 404,
				msg: httpStatusCodes[400],
			},
		});
	} else {
		gameToDelete.destroy();
		return res.status(200).send({
			message: 'videojuego eliminado!',
			status: {
				code: 200,
				msg: httpStatusCodes[200],
			},
		});
	}
};
