import { Request, Response, NextFunction } from 'express';
import { validations } from '@utils/allValidations';

export const paramsUserIDValidator = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
    const userId: string = req.params.id;

    try {
        validations.validateIsUUID(userId);
        return next()
    } catch (error: any) {
        error.error_message = error.message;
        error.message = 'Fallo a la hora de eliminar usuario.'
        return next(error);
    }
};
