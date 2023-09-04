import validator from 'validator';
import { CustomError } from '../customError';

export const validateIsUUID = (id: string, errormsg?: string): boolean => {
	
	if (!validator.isUUID(id)) throw new CustomError(errormsg? errormsg : 'No existe esa ID', 400);

	return true;
};
