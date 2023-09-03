import validator from "validator";

export const validateEmail = (email: string): boolean => {

    if(!validator.isEmail(email)) throw new Error("El email no es valido.")

    
    return true;
}