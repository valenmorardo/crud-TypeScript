import validator from 'validator';
import { CustomError } from '../customError';

export const validatePrice = (price: number): boolean => {
	if (validator.isEmpty(price.toString()))
		throw new CustomError('El precio es obligatorio.', 400);

	if (
		!validator.isInt(price.toString()) ||
		!validator.isFloat(price.toString())
	) {
		throw new CustomError(
			'El numero proporcionado no es valido. Debe ser un entero o decimal.',
			400,
		);
	}
	return true;
};
