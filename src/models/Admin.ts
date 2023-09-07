import { DataTypes, Model } from 'sequelize';
import Database from '@config/database';
import { IAdminAttributes } from '@libs/typings/adminAttributes';

const Admin_Model = Database.define<Model, IAdminAttributes>(
	'admin',
	{
		id: {
			type: DataTypes.UUIDV4,
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
	},
	{
		timestamps: false,
	},
);


export default Admin_Model;