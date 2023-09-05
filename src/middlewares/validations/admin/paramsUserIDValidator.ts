import { Request, Response, NextFunction } from 'express';
import { validations } from '@utils/allValidations';

export const paramsUserIDValidator = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
    const userId = req.params.id;

    try {
        validations.validateIsUUID(userId, 'No existe usuario con esa ID');
        return next()
    } catch (error: any) {
        error.error_message = error.message;
        error.message = 'Fallo a la hora de eliminar usuario.'
    }
};
