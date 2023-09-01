import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from 'axios';

import validator from 'validator';

export const validateParamsId = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
    
	const gameId = req.params.id;

	if (!validator.isUUID(gameId)) {
		return res.send('No existe esa ID');
	}

	return next();
};
