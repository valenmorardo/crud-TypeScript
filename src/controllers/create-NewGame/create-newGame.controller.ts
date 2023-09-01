import { Request, Response, NextFunction } from 'express';
import { httpStatusCodes } from '@libs/httpStatusCodes';
import { IVideogameAttributes } from '@libs/Types_&_Interfaces/videogame-attributes';
import Videogame_Model from '@models/Videogames';

export const createNewGame = async (
	req: Request,
	res: Response,
	_next: NextFunction,
): Promise<Response> => {
    const {name, description, price, genres}: IVideogameAttributes = req.body
    const userId = req.userId

    const newGame = await Videogame_Model.create({
        name,
        description,
        price,
        genres,
        ownerUserId: userId
    });

    return res.status(201).send({
        message: "Juego creado",
        newGame,
        status: {
            code:201,
            msg: httpStatusCodes[201]
        }
    })
};
