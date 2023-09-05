import { responseMsg } from '@libs/responseMsg';
import { CustomError } from '@utils/customError';
import validator from 'validator';

export const validateUserName = (name: string): boolean => {
	const patronMayusMin: RegExp = /^[A-Za-z\s]+$/; 
	const patronEspBlanc: RegExp = /(\s{2,})/g;

	if (validator.isEmpty((name.trim())))
		throw new CustomError(responseMsg.error_nameIsEmpty, 400);

	if (!patronMayusMin.test(name))
		throw new CustomError(responseMsg.error_nameOnlyLetters, 400);

	if (patronEspBlanc.test(name))
		throw new CustomError(
			responseMsg.error_nameNotWhitespaces,
			400,
		);

	return true;
};
