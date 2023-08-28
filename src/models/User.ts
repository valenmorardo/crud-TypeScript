import { DataTypes, Model } from "sequelize";
import Database from "@config/database";

import { IUserAttributes } from '@libs/Types_&_Interfaces/user-attributes';

const User_Model = Database.define<Model, IUserAttributes> (
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
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        timestamps: false,
    }
)

export default User_Model;