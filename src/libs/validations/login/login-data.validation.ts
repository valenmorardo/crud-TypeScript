import { Request, Response, NextFunction } from 'express';
import { httpStatusCodes } from '@libs/httpStatusCodes';
import bcrypt from 'bcryptjs';

import User_Model from '@models/User';

export const validateLoginData = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<Response | void> => {
	const { email, password } = req.body;
	const email_body: string = email;
	const password_body: string = password;

	const userFounded = await User_Model.findOne({
		where: { email: email_body },
	});

	// check if that email is already exists in database
	if (!userFounded) {
		return res.status(400).send({
			error_message:
				'Couldn’t find an account associated with this email. Try again or create an account',
			status: {
				code: 400,
				message: httpStatusCodes[400],
			},
		});
	}

	

	//compare passwords
	const passwordCheck = await bcrypt.compare(
		password_body,
		userFounded.dataValues.password,
	);

	if (!passwordCheck) {
		return res.status(400).send({
			message: 'Email or password is wronng. Try again',
			status: {
				code: 400,
				message: httpStatusCodes[400],
			},
		});
	}

	return next()
};
