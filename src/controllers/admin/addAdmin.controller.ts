import { Request, Response, NextFunction } from 'express';
import User_Model from '@models/User';
import { CustomError } from '@utils/customError';
import { IUserAttributes } from '@libs/typings/userAttributes';
import { responseMsg } from '@libs/responseMsg';

export const addAdmin = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	
	const userId = req.params.userId;
	



};
