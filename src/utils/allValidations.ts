import { validateDescription } from "./functionsValidations/validateDescription";
import { validateEmail } from "./functionsValidations/validateEmail";
import { validateGenres } from "./functionsValidations/validateGenres";
import { validateIsUUID } from "./functionsValidations/validateIsUUID";
import { validateName } from "./functionsValidations/validateName";
import { validatePassword } from './functionsValidations/validatePassword';
import { validatePrice } from './functionsValidations/validatePrice';

export const valida = {
    validateDescription,
    validateEmail,
    validateGenres,
    validateIsUUID,
    validateName,
    validatePassword,
    validatePrice,
}