import { Request, Response, NextFunction } from 'express';
import { httpStatusCodes } from '@libs/httpStatusCodes';

import User_Model from '@models/User';

export const userAlreadyRegistered = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const email_body: string = req.body.email;

	const userFounded = await User_Model.findOne({
		where: { email: email_body },
	});

	if (userFounded) {
		return res.status(400).send({ message: 'ese email ya existe' });
	}

	return next();
};
