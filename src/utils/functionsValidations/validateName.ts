import { CustomError } from 'src/utils/customError';

export const validateName = (name: string): boolean => {
	const patron: RegExp = /^[A-Za-z]+(\s[A-Za-z]+)*$/;

	if (!patron.test(name.trim())) {
		throw new CustomError('El nombre debe estar en formato texto', 400);
	}

	return true;
};
