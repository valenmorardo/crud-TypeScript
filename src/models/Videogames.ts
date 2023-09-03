import { DataTypes, Model } from 'sequelize';
import Database from '@config/database';

import { IVideogameAttributes } from '@libs/typings/videogame-attributes';

const Videogame_Model = Database.define<Model, IVideogameAttributes>(
	'videogame',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
			unique: true,
		},

		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		genres: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: false,
		},
	},
	{
		timestamps: false,
	},
);

export default Videogame_Model;
