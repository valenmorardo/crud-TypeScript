import { Request, Response, NextFunction } from 'express';
import { httpStatusCodes } from '@libs/httpStatusCodes';

import User_Model from '@models/User';

export const payloadAuthTokenVerify = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<Response | void> => {

    const userId = req.userId;

    User_Model.findByPk(userId).then((user) => {
        if(!user) {
            
            return res.status(401).send({
                message: "Access Denied.",
                status: {
                    code: 401,
                    msg: httpStatusCodes[401]
                }
            })
        }
        else {
            return next()
        }
    })


};  
