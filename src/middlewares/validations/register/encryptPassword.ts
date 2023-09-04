import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';

export async function encryptPassword(
	req: Request,
	_res: Response,
	next: NextFunction,
): Promise<void> {
	const password: string = req.body.password;

	const salt: string = await bcrypt.genSalt(8);
	const encryptedPassword: string = await bcrypt.hash(password, salt);

	req.encryptedPassword = encryptedPassword;

	return next();
}
