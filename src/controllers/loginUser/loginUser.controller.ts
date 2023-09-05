import { NextFunction, Request, Response } from 'express';

import jwt from 'jsonwebtoken';
import env from '@config/var-environments';

export async function loginUser(
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<Response | void> {
	try {
		const auth_token: string = jwt.sign(
			{ id: req.userId },
			env.JWT_SECRET || 'JWT_SECRET',
			{ expiresIn: env.JWT_EXPIRES_IN || '1h' },
		);
		return res.status(200).header('auth-token', auth_token).send({
			logged: true,
			message: 'Usted se encuentra ahora logeado.',
		});
	} catch (error: any) {
		console.log(error);
		error.error_message = error.message;
		error.message = 'Fallo a la hora de logear.';
	}
}
