import { Request, Response, NextFunction } from 'express';

import { IVideogameAttributes } from '@libs/typings/videogameAttributes';
import Videogame_Model from '@models/Videogames';
import { responseMsg } from '@libs/responseMsg';


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
				message: responseMsg.gameCreated,
				newGame,
			});
		})
		.catch((error) => {
			error.error_message = error.message;
			error.message = responseMsg.error_failCreateGame;
			return next(error)
		});
};
