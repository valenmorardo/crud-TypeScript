import { CustomError } from 'src/utils/customError';
import validator from 'validator';

export const validateGameName = (gameName: string): boolean => {
	const patronMayusMin: RegExp = /^[A-Za-z\s]+$/; 
	const patronEspBlanc: RegExp = /(\s{2,})/g;

	if (validator.isEmpty((gameName.trim())))
		throw new CustomError('El nombre no puede ser vacio', 400);

    if(validator.isAscii(gameName)) throw new CustomError('El nombre contiene caracteres invalidos.', 400);

	if (patronEspBlanc.test(gameName))
		throw new CustomError(
			'No puede haber mas de un espacio en blanco entre palabras.',
			400,
		);

	return true;
};
