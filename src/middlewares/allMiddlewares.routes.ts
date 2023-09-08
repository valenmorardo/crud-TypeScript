import { encryptPassword } from './validations/register/encryptPassword';
import { authTokenValidator } from './validations/JWT/authTokenValidator';
import { payloadIDExcistenseValidator } from './validations/JWT/payloadIDExcistenseValidator';
import { verifyIsAdmin } from './validations/admin/verifyIsAdmin';

import { registerFieldsValidator } from './validations/register/registerFieldsValidator';
import { emailExistenceValidator } from './validations/register/emailExistenceValidator';
import { loginFieldsValidator } from './validations/login/loginFieldsValidator';
import { loginDataValidator } from './validations/login/loginDataValidator';

import { createGameFieldsValidator } from './validations/profile/createGameFieldsValidator';
import { paramsGameIDValidator } from './validations/profile/paramsGameIDValidator';

import { adminIDValidator } from './validations/admin/adminIDValidator';

import { userIdBodyValidator } from './validations/admin/userIdBodyValidator';

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
	adminIDValidator,
	userIdBodyValidator,
};
