import { DataTypes, Model } from 'sequelize';
import Database from '@config/database';
import { IAdminAttributes } from '@libs/typings/adminAttributes';

const Admin_Model = Database.define<Model, IAdminAttributes>(
	'admin',
	{
		id: {
			type: DataTypes.UUID,
			allowNull: false,
			primaryKey: true,
			unique: true,
		},

	},
	{
		timestamps: false,
	},
);



export default Admin_Model;