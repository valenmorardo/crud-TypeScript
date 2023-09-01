//register - stage
import { validateRegisterFields } from './register/register-fields.validation';
import { userAlreadyRegistered } from './register/user-already-registered.validation';

// login - stage
import { validateLoginFields } from './login/login-fields.validation';
import { validateLoginData } from './login/login-data.validation';

//post new gane - stage
import { validateNewGameFields } from './newGame/newGame.validation';

//Delete a game - stage
import { validateParamsId } from './deleteAGame/validateParams-id.validations';

export {
	validateRegisterFields,
	validateLoginFields,
	validateLoginData,
	userAlreadyRegistered,
	validateNewGameFields,
	validateParamsId,
};
