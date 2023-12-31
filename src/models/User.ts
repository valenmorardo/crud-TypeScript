import { DataTypes, Model } from 'sequelize';
import Database from '@config/database';

import { IUserAttributes } from '@libs/typings/userAttributes';
import Videogame_Model from './Videogames';
import Admin_Model from './Admin';

const User_Model = Database.define<Model, IUserAttributes>(
	'user',
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
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	},
);

User_Model.hasMany(Videogame_Model, {
	foreignKey: 'ownerUserId',
	onDelete: 'CASCADE',
});

User_Model.hasOne(Admin_Model);
Admin_Model.belongsTo(User_Model);

export default User_Model;
