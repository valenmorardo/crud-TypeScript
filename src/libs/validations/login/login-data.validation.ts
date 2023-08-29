import { Request, Response, NextFunction } from 'express';
import { httpStatusCodes } from '@libs/httpStatusCodes';
import bcrypt from 'bcryptjs';

import User_Model from '@models/User';

import { IUserAttributes } from '@libs/Types_&_Interfaces/user-attributes';

export const validateLoginData = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<Response | void> => {
	const { email, password } = req.body;
	const email_body: string = email;
	const password_body: string = password;

	const user: IUserAttributes | null = await User_Model.findOne({
		where: { email: email_body },
	}).then((user) => {
		if (!user) {
			return null;
		} else {
			return user.dataValues;
		}
	}).catch((err) => {
		console.log(err);
		res.status(500).send({
			code:500,
			msg: httpStatusCodes[500]
		})
	})

	// check if that email is already exists in database
	if (!user) {
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
	const passwordCheck: boolean = await bcrypt.compare(
		password_body,
		user.password,
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

	req.userId= user.id

	return next();
};
