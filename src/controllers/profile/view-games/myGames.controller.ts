import { Request, Response, NextFunction } from 'express';
import { httpStatusCodes } from '@libs/httpStatusCodes';

import Videogame_Model from '@models/Videogames';

export const getMyGames = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<Response>=> {
	const id = req.userId;

	const games = await Videogame_Model.findAll({
		where: {
			ownerUserId: id,
		},
		attributes: {
			exclude: ['ownerUserId'],
		},
	});


	if (!games.length) {
		return res.status(404).send({
            message: 'No games found',
            status: {
                code: 404,
                msg: httpStatusCodes[404]
            }
        })
	}

	const gamesFounded = games.map((juego) => {
		return juego;
	});

	return res.status(200).send({
		Your_Games: gamesFounded,
		status: {
			code: 200,
			msg: httpStatusCodes[200],
		},
	});
};
