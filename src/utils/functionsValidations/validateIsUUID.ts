import validator from 'validator';
import { CustomError } from '../customError';

export const validateIsUUID = (id: string): boolean => {
	if (!validator.isUUID(id)) throw new CustomError('No existe ese ID', 400);

	return true;
};
