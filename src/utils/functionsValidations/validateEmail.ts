import validator from 'validator';
import { CustomError } from '@utils/customError';
import { responseMsg } from '@libs/responseMsg';

export const validateEmail = (email: string): boolean => {
	if (validator.isEmpty(email))
		throw new CustomError(responseMsg.error_emailIsEmpty, 400);

	if (!validator.isEmail(email))
		throw new CustomError(responseMsg.error_emaiFormatNotValid, 400);

	return true;
};
