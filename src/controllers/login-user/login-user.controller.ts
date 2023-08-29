import { Request, Response } from 'express';
import { httpStatusCodes } from '@libs/httpStatusCodes';
import jwt from 'jsonwebtoken';
import env from '@config/var-environments';



export async function loginUser(req: Request, res: Response): Promise<void> {
	try {
		const auth_token: string = jwt.sign(
			{ id: req.userId },
			env.JWT_SECRET || 'JWT_SECRET', { expiresIn: env.JWT_EXPIRES_IN || "24h"}
		);
		res
			.status(200)
			.header('auth-token', auth_token)
			.send({
				logged: true,
				message: 'Usted se encuentra ahora logeado.',
				status: {
					code: 200,
					msg: httpStatusCodes[200],
				},
			});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			code: 500,
			msg: httpStatusCodes[500],
		});
	}
}
