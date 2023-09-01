import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from 'axios';

import validator from 'validator';

import Videogame_Model from '@models/Videogames';

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
		return res.send('No posee ningun juego con esa ID.');
	} else {
		gameToDelete.destroy();
		return res.send('Juego eliminado');
	}
};
