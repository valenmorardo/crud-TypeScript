import { DataTypes, Model } from 'sequelize';
import Database from '@config/database';

import { ProjectAttributes } from 'src/services/Types_&_Interfaces';

const Project = Database.define<Model, ProjectAttributes>(
	'projects',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
		},
		description: {
			type: DataTypes.STRING,
		},
	},
	{
		timestamps: false,
	},
);

export default Project;


