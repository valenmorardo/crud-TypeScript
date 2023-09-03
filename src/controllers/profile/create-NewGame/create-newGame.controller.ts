import { Request, Response, NextFunction } from 'express';
import { httpStatusCodes } from '@libs/httpStatusCodes';
import { IVideogameAttributes } from '@libs/Types_&_Interfaces/videogame-attributes';
import Videogame_Model from '@models/Videogames';
import { CustomError } from 'src/utils/custom-error';

export const createNewGame = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<Response | void> => {
    const {name, description, price, genres}: IVideogameAttributes = req.body
    const userId = req.userId

    try {
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


    } catch (error: any) {
        
        error.error_message = error.message
        error.message = 'Fallo al crearse el juego'

        return next(error)
    }


};
