import axios from 'axios';
import { Request, Response } from 'express';

import Videogame_Model from '@models/Videogames';

///////////////////////////////////////
async function postNewGame(req: Request, res: Response): Promise<void> {
	const { name, description, price, generos } = req.body;

	Videogame_Model.create({
		name,
		description,
		price,
		generos,
	})
		.then((newGame): Response => {
			console.log('Nuevo juego creado: ', newGame.dataValues);
			return res.status(200).send({
				created: true,
				newGame: newGame,
				message: 'El juego ha sido creado correctamente',
				status: {
					codigo: 200,
					msg: 'OK',
				},
			});
		})
		.catch((err): Response => {
			console.log(err);
			return res.status(400).send({
				created: false,
				message: 'Error en el registro del juego',
				errores: err,
			});
		});
}

///////////////////////////////////////
///////////////////////////////////////

async function getAllGames(req: Request, res: Response): Promise<void> {
	Videogame_Model.findAll({})
		.then((games): Response => {
			console.log(`todos los juegos: ${games}`);
			return res.status(200).send({
				response: true,
				message: 'Los juegos han sido encontrados correctamente',
				juegos: games,
				status: {
					codigo: 200,
					msg: 'OK',
				},
			});
		})
		.catch((err): Response => {
			console.log(err);
			return res.status(400).send({
				respons: false,
				message: 'Ocurrio un error al buscar los juegos',
				errores: err,
			});
		});
}

///////////////////////////////////////

///////////////////////////////////////

async function deleteAGame(req: Request, res: Response): Promise<void> {
	const gameID: string = req.params.id;

	Videogame_Model.destroy({
		where: {
			id: gameID,
		},
	})
		.then((gameDeleted): Response => {
			console.log(gameDeleted);

			if (gameDeleted) {
				return res.status(200).send({
					response: true,
					message: 'juego eliminado',
					status: {
						codigo: 200,
						msg: 'OK',
					},
				});
			} else {
				return res.status(400).send({
					response: false,
					message: 'no se encontro juego con esa ID',
					status: {
						codigo: 400,
						msg: 'id not found',
					},
				});
			}
		})
		.catch((err): Response => {
			console.log(err);
			return res.status(400).send({
				respons: false,
				message: 'Ocurrio un error al buscar el juego',
				errores: err,
			});
		});
}
///////////////////////////////////////

///////////////////////////////////////
async function patchAGame(req: Request, res: Response): Promise<void> {
	const gameID: string = req.params.id;
	const updatedFields: Object = req.body;

	Videogame_Model.update(updatedFields, {
		where: {
			id: gameID,
		},
	})
		.then((gameUpdated): Response => {
			return res.status(200).send({
				upgrade: true,
				message: 'datos de juego actualizado',
				gameUpdated: gameUpdated,
				status: {
					codigo: 200,
					msg: 'OK',
				},
			});
		})
		.catch((err): Response => {
			return res.status(400).send({
				respons: false,
				message: 'Ocurrio un error al actualizar los datos del juego',
				errores: err,
			});
		});
}
///////////////////////////////////////

export { getAllGames, postNewGame, deleteAGame, patchAGame };
