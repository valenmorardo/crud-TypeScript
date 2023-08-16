import { DataTypes, Model } from 'sequelize';
import Database from '@config/database';

import { VideogameAttributes } from '@services/Types_&_Interfaces/videogame-attributes';

const Videogames = Database.define<Model, VideogameAttributes>(
	'videogames',
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
			unique: true,
			allowNull: false,
		},

		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		generos: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: false,
		},
	},
	{
		timestamps: false,
	},
);

export default Videogames;
