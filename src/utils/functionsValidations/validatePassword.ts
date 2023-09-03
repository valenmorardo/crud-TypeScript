import validator from 'validator';
import { CustomError } from '../customError';

export const validatePassword = (password: string): boolean => {
	if (validator.isEmpty(password))
		throw new CustomError('La contrseña no puede estar vacio.', 400);

	if (!validator.isAscii(password))
		throw new CustomError(
			'The password isnt valid. Must contain ascii characters only.',
			400,
		);

	if (
		!validator.isStrongPassword(password, {
			minLength: 8,
			minLowercase: 1,
			minUppercase: 1,
			minNumbers: 1,
			minSymbols: 1,
		})
	) {
		throw new CustomError(
			'La contraseña no es fuerte. Debe cumplir las siguientes condiciones.',
			400,
			{
				caracteres_min: 8,
				minisculas_min: 1,
				mayusculas_min: 1,
				numeros_min: 1,
				simbolos_min: 1,
			},
		);
	}

	return true;
};
