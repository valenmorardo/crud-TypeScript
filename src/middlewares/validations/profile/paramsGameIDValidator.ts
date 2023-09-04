import { Request, Response, NextFunction } from 'express';

import { validations } from '@utils/allValidations';

export const paramsGameIDValidator = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
    const gameId: string = req.params.id;
 
    try {
        validations.validateIsUUID(gameId);
        return next()
    } catch (error: any) {
        error.error_message = error.message;
        error.message = 'Fallo a la hora de eliminar videojuego'
        return next(error)
    }
};
