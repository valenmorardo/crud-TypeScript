import validator from 'validator';
import { CustomError } from '../customError';

export const validateDescription = (description: string): boolean => {
	if (validator.isEmpty(description))
		throw new CustomError('la descripcion es obligatoria.', 400);

	if (!validator.isAscii(description))
		throw new CustomError('La descripcion contiene caracteres invalidos.');

	return true;
};
