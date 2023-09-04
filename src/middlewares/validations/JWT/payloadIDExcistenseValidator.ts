import { Request, Response, NextFunction } from 'express';

import User_Model from '@models/User';
import { CustomError } from '@utils/customError';
import { validations } from '../../../utils/allValidations';

export const payloadIDExcistenseValidator = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<Response | void> => {
	const userId = req.userId;

	User_Model.findByPk(userId).then((user) => {

        if(!user) throw new CustomError('Access denied.', 400)
    
        return next()
    }).catch((error) => {
        error.message_error = error.message;
        error.message = "Fallo a la hora de logear."
        return next(error)
    });
};
