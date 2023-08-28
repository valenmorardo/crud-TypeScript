import { Request, Response, NextFunction } from 'express';
import { httpStatusCodes } from '@libs/httpStatusCodes';

import User_Model from '@models/User';


export const userAlreadyRegistered = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const email_body: string = req.body.email;

	const userFounded: boolean = await User_Model.findOne({
		where: { email: email_body },
	}).then((user) => {
		if (!user) {
			return false;
		} else {
			return true;
		}
	});

	if (userFounded) {
		return res.status(400).send({
			message: 'Email already exists. Try to log in',
			status: {
				code: 400,
				message: httpStatusCodes[400],
			},
		});
	}

	return next();
};
