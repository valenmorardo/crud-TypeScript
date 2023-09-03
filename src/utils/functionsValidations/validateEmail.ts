import validator from "validator";
import { CustomError } from "../customError";

export const validateEmail = (email: string): boolean => {
    if(validator.isEmpty(email)) throw new CustomError('El email es obligatorio.', 400)

    if(!validator.isEmail(email)) throw new CustomError("El email no es valido.", 400)

    
    return true;
}