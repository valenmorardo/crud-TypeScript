import { Request, Response, NextFunction } from 'express';

import Videogame_Model from '@models/Videogames';
import { httpStatusCodes } from '@libs/httpStatusCodes';
import { CustomError } from '@utils/customError';
import { responseMsg } from '@libs/responseMsg';

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
				throw new CustomError(responseMsg.noGameMatchID, 400);

			game.destroy();
			return res.status(201).send({
				game_deleted: true,
				msg: responseMsg.gameSuccessDeleted,
			});
		})
		.catch((error) => {
			error.error_message = error.message;
			error.mesage = responseMsg.failDeleteGame;
			return next(error);
		});
};
