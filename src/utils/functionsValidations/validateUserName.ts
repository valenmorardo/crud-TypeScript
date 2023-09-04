import { CustomError } from 'src/utils/customError';
import validator from 'validator';

export const validateUserName = (name: string): boolean => {
	const patronMayusMin: RegExp = /^[A-Za-z\s]+$/; 
	const patronEspBlanc: RegExp = /(\s{2,})/g;

	if (validator.isEmpty((name.trim())))
		throw new CustomError('El nombre no puede ser vacio', 400);

	if (!patronMayusMin.test(name))
		throw new CustomError('El nombre debe contener unicamente letras', 400);

	if (patronEspBlanc.test(name))
		throw new CustomError(
			'No puede haber mas de un espacio en blanco entre palabras.',
			400,
		);

	return true;
};
