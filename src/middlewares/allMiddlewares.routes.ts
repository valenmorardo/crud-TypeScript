import { encryptPassword } from './encryptPassword';
import { authTokenValidator } from './validations/JWT/authTokenValidator';
import { payloadIDExcistenseValidator } from './validations/JWT/payloadIDExcistenseValidator';
import { verifyIsAdmin } from './validations/admin/verifyIsAdmin';

import { registerFieldsValidator } from './validations/register/registerFieldsValidator';
import { emailExistenceValidator } from './validations/register/emailExistenceValidator';
import { loginFieldsValidator } from './validations/login/loginFieldsValidator';
import { loginDataValidator } from './validations/login/loginDataValidator';

import { createGameFieldsValidator } from './validations/profile/createGameFieldsValidator';
import { paramsGameIDValidator } from './validations/profile/paramsGameIDValidator';

import { paramsUserIDValidator } from './validations/admin/paramsUserIDValidator';

export {
	encryptPassword,
	authTokenValidator,
	payloadIDExcistenseValidator,
	verifyIsAdmin,
	registerFieldsValidator,
	emailExistenceValidator,
	loginFieldsValidator,
	loginDataValidator,
	createGameFieldsValidator,
	paramsGameIDValidator,
	paramsUserIDValidator,
	
};
