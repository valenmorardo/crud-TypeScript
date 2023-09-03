import validator from 'validator';
import { CustomError } from '../customError';

export const validateIsUUID = (id: string): boolean => {
	if(validator.isEmpty(id)) throw new CustomError('La ID no puede ser vacio.')
	if (!validator.isUUID(id)) throw new CustomError('No existe ese ID', 400);

	return true;
};
