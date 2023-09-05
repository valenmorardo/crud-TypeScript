import validator from 'validator';
import { CustomError } from '@utils/customError';
import { responseMsg } from '@libs/responseMsg';

export const validatePrice = (price: number): boolean => {
	if (validator.isEmpty(price.toString()))
		throw new CustomError(responseMsg.error_gamePriceIsEmpty, 400);

	if (
		!validator.isInt(price.toString()) ||
		!validator.isFloat(price.toString())
	) {
		throw new CustomError(
			responseMsg.error_gamePriceIsNotNumber,
			400,
		);
	}
	return true;
};
