import { responseMsg } from '@libs/responseMsg';
import { CustomError } from '@utils/customError';

import validator from 'validator';

export const validateIsJWT = (jwt: string): boolean => {
	if (!validator.isJWT(jwt)) {
		throw new CustomError(responseMsg.error_notJWT, 400);
	}

	return true;
};
