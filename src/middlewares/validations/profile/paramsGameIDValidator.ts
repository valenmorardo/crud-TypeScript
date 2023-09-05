import { Request, Response, NextFunction } from 'express';

import { validations } from '@utils/allValidations';
import { responseMsg } from '@libs/responseMsg';

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
        error.message = responseMsg.failDeleteGame
        return next(error)
    }
};
