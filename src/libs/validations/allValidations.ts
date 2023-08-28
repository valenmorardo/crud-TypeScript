//register stage
import { validateRegisterFields } from "./register/register-fields.validation";
import { userAlreadyRegistered } from "./register/user-already-registered";

// login stage
import { validateLoginFields } from "./login/login-fields.validation";
import { validateLoginData } from "./login/login-data.validation";

export {validateRegisterFields, validateLoginFields, validateLoginData, userAlreadyRegistered}