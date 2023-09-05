import { IAdditionalDataError } from '@libs/typings/additionalDataError';

// validations error messages
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

// CONTROLLERS || MIDDLEWARES.
const error_MissingData: string =
	'Missing data fields. The following fields are required';

// REGISTER
const error_defaultMSGRegister: string = 'Failed to create the user';
const registerDataRequired: IAdditionalDataError = {
	name: 'your name',
	email: 'your email',
	password: 'your password',
};

const error_emailAlreadyExists: string = 'Email already exists. Try to log in.';
const success_register: string = 'The user was created successfully';

// LOGIN
const error_defaultMSGLogin: string = 'Login failed';
const loginDataRequired: IAdditionalDataError = {
	email: 'your email',
	password: 'your password',
};
const error_emailDoesntExists: string =
	'Couldn’t find an account associated with this email. Try again or create an account';
const error_wrongData: string = 'Email or password is wronng. Try again';
const success_login: string = 'You are now logged in.';

//PROFILE
const error_failCreateGame: string = 'Failed to create the video game.';
const error_obtainUserGames: string = 'Failed to retrieve video games."';

const error_authFail: string = 'Authentication failed.';
const error_accessDenied: string = 'Access denied. Try to log in again';
const error_profileData: string = 'Failed to retrieve profile data.';
const error_gameMissingData: string =
	'Game data fields are missing. The required fields are as follows';
const gameDataRequired: IAdditionalDataError = {
	name: 'string name of video game.',
	description: 'string description of video game.',
	price: 'price of video game.',
	genres: 'array genres of video games.',
};
const gameCreated: string = 'Game created';
const notFoundGamesInProperty: string = 'No games found in your ownership.';

const failDeleteGame: string = 'Failed to delete video game.';

const noGameMatchID: string = 'You do not own any video game with that ID';

const gameSuccessDeleted: string = 'Video game deleted successfully';

// ADMIN
const accesDeniedADM: string = "You don't have permission to access here";
const accesDeniedDefault: string = 'Access denied';

const failToFoundUsers: string = 'ADMIN SITE || No users found';
const failToDeleteUser: string = 'Failed to delete user.';
const noUserFoundMatchID: string = 'No user found with that ID';
const userDeleted: string = 'User deleted successfully."';

const userUpdated: string = 'User updated successfully.';
const failUpdatedDataUser: string = 'Failed to modify user.'


export const responseMsg = {
	failUpdatedDataUser,
	userUpdated,
	noUserFoundMatchID,
	userDeleted,

	failToDeleteUser,
	failToFoundUsers,
	accesDeniedADM,
	accesDeniedDefault,
	error_nameIsEmpty,
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

	error_MissingData,

	error_defaultMSGRegister,
	registerDataRequired,
	error_emailAlreadyExists,
	success_register,

	error_defaultMSGLogin,
	loginDataRequired,
	error_emailDoesntExists,
	error_wrongData,
	success_login,

	error_authFail,
	error_accessDenied,
	error_profileData,
	error_failCreateGame,
	error_gameMissingData,
	gameDataRequired,
	gameCreated,
	notFoundGamesInProperty,
	error_obtainUserGames,
	failDeleteGame,
	noGameMatchID,
	gameSuccessDeleted,
};
