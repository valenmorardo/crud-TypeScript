import validator from 'validator';
import { CustomError } from '@utils/customError';
import { responseMsg } from '@libs/responseMsg';

export const validateDescription = (description: string): boolean => {
	if (validator.isEmpty(description))
		throw new CustomError(responseMsg.error_GameDescriptionIsEmpty, 400);

	if (!validator.isAscii(description))
		throw new CustomError(responseMsg.error_gameDescriptionOnlyAscii, 400);

	return true;
};
