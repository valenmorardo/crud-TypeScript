import validator from 'validator';
import { CustomError } from '../customError';
import { responseMsg } from '@libs/responseMsg';

export const validateIsUUID = (id: string, errormsg?: string): boolean => {
	
	if (!validator.isUUID(id)) throw new CustomError(errormsg? errormsg : responseMsg.error_notUUID, 400);

	return true;
};
