import { validateDescription } from "./functionsValidations/validateDescription";
import { validateEmail } from "./functionsValidations/validateEmail";
import { validateGenres } from "./functionsValidations/validateGenres";
import { validateIsUUID } from "./functionsValidations/validateIsUUID";
import { validateName } from "./functionsValidations/validateName";
import { validatePassword } from './functionsValidations/validatePassword';
import { validatePrice } from './functionsValidations/validatePrice';
import { validateIsJWT } from "./functionsValidations/validateJWT";

export const validations = {
    validateDescription,
    validateEmail,
    validateGenres,
    validateIsUUID,
    validateName,
    validatePassword,
    validatePrice,
    validateIsJWT
}