// validations error messages

import { IAdditionalDataError } from './typings/additionalDataError';

// UserName
const error_nameIsEmpty: string = 'The name is required.';
const error_nameOnlyLetters: string = 'The name must contain only letters';
const error_nameNotWhitespaces: string =
	'There cannot be more than one whitespace between words.';

// Email
const error_emailIsEmpty: string = 'The email is required.';
const error_emaiFormatNotValid: string = 'The email is not valid';

// Password
const error_passwordIsntEmpty: string = 'The password is required.';
const error_passwordOnlyAscii: string =
	'The password is not valid. It must contain only ASCII characters.';
const error_passwordNotStrong: string =
	'The password is not strong. It must meet the following requirements:';
const passwordRequirements: IAdditionalDataError = {
	Minimum_characters: 8,
	Minimum_lowercase: 1,
	Minimum_uppercase: 1,
	Minimum_numbers: 1,
	Minimum_symbols: 1,
};

// Game Name
const error_gameNameOnlyAscii: string =
	'The game name is not valid. It must contain only ASCII characters.';
const error_gameNameIsEmpty: string = 'The game name is required.';
const error_gameNameNotWhitespaces: string =
	'There cannot be more than one whitespace between words.';

// Description
const error_GameDescriptionIsEmpty: string =
	'The game description is required.';
const error_gameDescriptionOnlyAscii: string =
	'The game description is not valid. It must contain only ASCII characters.';
    

// Price
const error_gamePriceIsEmpty: string = 'The game price is required.';
const error_gamePriceIsNotNumber: string =
	'The price is not valid. It must be an integer or a decimal.';

// Genres
const error_gameGenresIsntArray: string =
	'The genre or genres must be within an array.';
const error_gameGenresEmpty: string = 'There must be at least one genre.';
const error_gameGenresInvalid: string = 'One or more genres are not valid.';

// UUID
const error_notUUID: string = 'That ID does not exist.';

// JWT
const error_notJWT: string = 'Access denied.';

export const responseMsg = {
	error_nameIsntEmpty,
	error_nameOnlyLetters,
	error_nameNotWhitespaces,
	error_emailIsEmpty,
	error_emaiFormatNotValid,
	error_passwordIsntEmpty,
	error_passwordOnlyAscii,
	error_passwordNotStrong,
	passwordRequirements,
	error_gameNameOnlyAscii,
	error_gameNameIsEmpty,
	error_gameNameNotWhitespaces,
	error_GameDescriptionIsEmpty,
	error_gameDescriptionOnlyAscii,
	error_gamePriceIsEmpty,
	error_gamePriceIsNotNumber,
	error_gameGenresIsntArray,
	error_gameGenresEmpty,
	error_gameGenresInvalid,
	error_notUUID,
	error_notJWT,
};
