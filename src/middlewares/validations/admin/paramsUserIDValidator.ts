import { Request, Response, NextFunction } from 'express';
import { validations } from '@utils/allValidations';
import { responseMsg } from '@libs/responseMsg';

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
        error.message = responseMsg.failToDeleteUser
        return next(error);
    }
};
