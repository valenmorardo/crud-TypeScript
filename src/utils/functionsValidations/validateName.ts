import { CustomError } from 'src/utils/customError';
import validator from 'validator';

export const validateName = (name: string): boolean => {
	const patron: RegExp = /^[A-Za-z]+(\s[A-Za-z]+)*$/;

	if (validator.isEmpty(name))
		throw new CustomError('El nombre no puede ser vacio', 400);

	if (!patron.test(name.trim()))
		throw new CustomError('El nombre debe estar en formato texto', 400);

	return true;
};
