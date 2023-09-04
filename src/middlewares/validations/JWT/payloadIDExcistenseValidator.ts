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

        if(!user) throw new CustomError('Fallo en la autenticacion.', 400)
    
        return next()
    }).catch((error) => {
        error.error_message = error.message;
        error.message = "Access denied. Try to log in again."
        return next(error)
    });
};
