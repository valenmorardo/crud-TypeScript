import axios from 'axios';
import { Request, Response } from 'express';

import Videogame_Model from '@models/Videogames';

import { VideogameAttributes } from '@services/Types_&_Interfaces/videogame-attributes';

// /////////////////////////////////////
async function postNewGame(req: Request, res: Response): Promise<void> {
	const { name, description, price, generos } = req.body;

	Videogame_Model.create({
		name,
		description,
		price,
		generos,
	})
		.then((newGame) => {
			console.log('Nuevo juego creado: ', newGame.dataValues);
			res.status(200).send({
				created: true,
				newGame: newGame,
				message: 'El juego ha sido creado correctamente',
				status: {
					codigo: 200,
					msg: 'OK',
				},
			});
		})
		.catch((err) => {
			res.status(400).send({
				created: false,
				message: 'Error en el registro del juego',
				errores: err,
			});

			console.log(err);
		});
}
///////////////////////////////////////

///////////////////////////////////////
async function getX(req: Request, res: Response) {}
///////////////////////////////////////

///////////////////////////////////////
async function putX(req: Request, res: Response) {}
///////////////////////////////////////

///////////////////////////////////////
async function deleteX(req: Request, res: Response) {}
///////////////////////////////////////

///////////////////////////////////////
async function patchX(req: Request, res: Response) {}
///////////////////////////////////////

export { getX, postNewGame, putX, deleteX, patchX };
