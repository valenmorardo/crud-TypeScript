import { Request, Response, NextFunction } from 'express';

import { IVideogameAttributes } from '@libs/typings/videogameAttributes';
import Videogame_Model from '@models/Videogames';


export const createNewGame =  (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	const { name, description, price, genres }: IVideogameAttributes = req.body;
	const userId = req.userId;

	Videogame_Model.create({
		name: name.trim(),
		description: description.trim(),
		price,
		genres,
		ownerUserId: userId,
	})
		.then((newGame) => {
			return res.status(201).send({
				message: 'Juego creado',
				newGame,
			});
		})
		.catch((error) => {
			error.error_message = error.message;
			error.message = 'Fallo a la hora de crear videojuego.';
			return next(error)
		});
};
