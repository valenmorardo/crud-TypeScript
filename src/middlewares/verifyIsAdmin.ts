import { Request, Response, NextFunction } from 'express';
import { httpStatusCodes } from '@libs/httpStatusCodes';

import User_Model from '@models/User';

export const verifyIsAdmin = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<Response | void> => {
	const userId = req.userId;

	const user = await User_Model.findByPk(userId);

	if (!user?.dataValues.isAdmin) {
		return res.status(401).send({
			message: 'Acces denied.',
			status: {
				code: 401,
				msg: httpStatusCodes[401],
			},
		});
	}

	return next();
};
