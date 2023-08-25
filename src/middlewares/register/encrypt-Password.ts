import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';

export async function encryptPassword(
	req: Request,
	_res: Response,
	next: NextFunction,
): Promise<void> {
	const { password } = req.body;

	const salt = await bcrypt.genSalt(8);
	const encryptedPassword = await bcrypt.hash(password, salt);

	req.encryptedPassword = encryptedPassword;

	return next();
}
