import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import { responseMsg } from '@libs/responseMsg';

export async function encryptPassword(
	req: Request,
	_res: Response,
	next: NextFunction,
): Promise<void> {
	const password: string = req.body.password;
	try {
		const salt: string = await bcrypt.genSalt(8);
		const encryptedPassword: string = await bcrypt.hash(password, salt);

		req.encryptedPassword = encryptedPassword;

		return next();
	} catch (error: any) {
		error.error_message = error.message;
		error.message = responseMsg.error_defaultMSGRegister;
		return next(error);
	}
}
