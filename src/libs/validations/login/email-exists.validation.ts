import { Request, Response, NextFunction } from 'express';
import { httpStatusCodes } from '@libs/httpStatusCodes';
import validator from 'validator';

import User_Model from '@models/User';

export const emailExists = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	const { email_body } = req.body;

	User_Model.findOne({ where: { email: email_body } }).then((email) => {
		if (!email) {
			return res.status(400).send({
				error_message:
					'Couldn’t find an account associated with this email. Try again or create an account',
				status: {
					code: 400,
					message: httpStatusCodes[400],
				},
			});
		}
	});

	return next();
};
