import { Request, Response } from 'express';
import { httpStatusCodes } from '@libs/httpStatusCodes';

import User_Model from '@models/User';

export const profileUser = (req: Request, res: Response): Response | void => {
    const id = req.userId

    User_Model.findByPk(id, {
        attributes: {
            exclude: ['password', 'isAdmin']
        }
    }).then((user) => {
        return res.status(200).send({
            user_profile: user,
            status: {
                code: 200,
                msg: httpStatusCodes[200],
            }
        })
    }).catch((err) => {
        console.log(err);
        return res.status(404).send({
            message: "profile not founded. Try Again",
            status: {
                code:404,
                msg: httpStatusCodes[400]
            }
        })
    })
};
