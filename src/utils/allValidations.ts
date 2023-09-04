import { validateDescription } from "./functionsValidations/validateDescription";
import { validateEmail } from "./functionsValidations/validateEmail";
import { validateGenres } from "./functionsValidations/validateGenres";
import { validateIsUUID } from "./functionsValidations/validateIsUUID";
import { validateUserName } from "./functionsValidations/validateUserName";
import { validatePassword } from './functionsValidations/validatePassword';
import { validatePrice } from './functionsValidations/validatePrice';
import { validateIsJWT } from "./functionsValidations/validateJWT";
import { validateGameName } from "./functionsValidations/validateGameName";

export const validations = {
    validateDescription,
    validateEmail,
    validateGenres,
    validateIsUUID,
    validateUserName,
    validatePassword,
    validatePrice,
    validateIsJWT,
    validateGameName
}