import { Request, Response } from "express";
import { httpStatusCodes } from "@libs/httpStatusCodes";

import User_Model from "@models/User";

export async function registerNewUser(req: Request, res: Response): Promise<void> {

    const { name, email } = req.body
    const { encryptedPassword } = req

    

    User_Model.create({
        name: name.trim(),
        email,
        password: encryptedPassword,
    })
    .then((newUser) => {
        console.log('New user created!');
        return res.status(201).send({
            user_created: true,
            message: 'El usuario se creo correctamente',
            status: {
                codigo: 200,
                msg: httpStatusCodes[200]
            }
        })
    }).catch((err) => {
        console.log(err);
        return res.status(500).send({
            user_created: false,
            error_message: err,
            status: {
                codigo: 500,
                msg: httpStatusCodes[500]
            }
        })
    })
    
}