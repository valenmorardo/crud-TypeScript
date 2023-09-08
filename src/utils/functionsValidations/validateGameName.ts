import { responseMsg } from '@libs/responseMsg';
import { CustomError } from '@utils/customError';
import validator from 'validator';

export const validateGameName = (gameName: string): boolean => {
	const patronEspBlanc: RegExp = /(\s{2,})/g;

	if (!validator.isAscii(gameName))
		throw new CustomError(responseMsg.error_gameNameOnlyAscii, 400);

	if (validator.isEmpty(gameName.trim()))
		throw new CustomError(responseMsg.error_gameNameIsEmpty, 400);
	if (patronEspBlanc.test(gameName))
		throw new CustomError(responseMsg.error_gameNameNotWhitespaces, 400);

	return true;
};
