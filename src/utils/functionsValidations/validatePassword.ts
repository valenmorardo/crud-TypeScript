import validator from 'validator';
import { CustomError } from '@utils/customError';
import { responseMsg } from '@libs/responseMsg';

export const validatePassword = (password: string): boolean => {
	if (validator.isEmpty(password))
		throw new CustomError(responseMsg.error_passwordIsntEmpty, 400);

	if (!validator.isAscii(password))
		throw new CustomError(responseMsg.error_passwordOnlyAscii, 400);

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
			responseMsg.error_passwordNotStrong,
			400,
			responseMsg.passwordRequirements,
		);
	}

	return true;
};
