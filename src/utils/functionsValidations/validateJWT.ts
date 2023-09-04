import { CustomError } from '@utils/customError';

import validator from 'validator';

export const validateIsJWT = (jwt: string): boolean => {
	if (!validator.isJWT(jwt)) {
		throw new CustomError('Acces denied.', 400);
	}

	return true;
};
