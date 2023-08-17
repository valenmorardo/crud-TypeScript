import axios from 'axios';
import { Request, Response } from 'express';

import Videogame_Model from '@models/Videogames';

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
async function getAllGames(req: Request, res: Response) {
	Videogame_Model.findAll({})
		.then((games) => {
			res.status(200).send({
				response: true,
				message: 'Los juegos han sido encontrados correctamente',
				juegos: games,
				status: {
					codigo: 200,
					msg: 'OK',
				},
			});
			console.log(`todos los juegos: ${games}`);
		})
		.catch((err) => {
			res.status(400).send({
				respons: false,
				message: 'Ocurrio un error al buscar los juegos',
				errores: err,
			});
			console.log(err);
		});
}
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

export { getAllGames, postNewGame, putX, deleteX, patchX };
