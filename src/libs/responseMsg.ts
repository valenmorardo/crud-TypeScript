import { IAdditionalDataError } from '@libs/typings/additionalDataError';
import { genres_videogames } from './typings/videogameAttributes';

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
const error_gameGenresInvalid: string = `One or more genres are not valid. Genres available: ${Object.values(
	genres_videogames,
).map((genre) => ' ' + genre)}`;

// UUID
const error_notUUID: string = 'That ID does not exist.';

// JWT
const error_notJWT: string = 'Access denied.';

// CONTROLLERS || MIDDLEWARES.
// msg defaults
const error_MissingData = 'Missing data';

// REGISTER ~~~~~~~
const error_defaultMSGRegister = 'Registration error.';
const registerDataRequired: IAdditionalDataError = {
	name: 'Your name',
	email: 'Your email',
	password: 'Your password',
};
const error_emailAlreadyExists = 'That email already exists. Try logging in.';
const success_register = 'Successful registration.';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// LOGIN ~~~~~~~
const error_defaultMSGLogin = 'Login error.';
const loginDataRequired: IAdditionalDataError = {
	email: 'Your email',
	password: 'Your password',
};
const error_wrongData = 'The password or email is incorrect.';
const error_emailDoesntExists = 'That email doesnt exist. Create an account.';
const success_login = 'Successful login';

/// AUTH ~~
const error_authFail = 'Authentication failed. Try logging in.';
const error_accessDenied = 'Access Denied.';

// PROFILE ~~~
const error_profileData = 'Error retrieving profile information.';
const gameDataRequired: IAdditionalDataError = {
	name: 'Your game name',
	description: 'Your game description',
	price: 'Your game price',
	genres:
		'Your game genres. Available genres: Action, Adventure, RPG, Strategy, Shooter, Sports, Simulation, Horror, Puzzle.',
};
const error_failCreateGame = 'Error while creating a video game.';
const gameCreated = 'Video game created successfully.';

const notFoundGamesInProperty = 'No games found in your possession.';
const error_obtainUserGames = 'Error retrieving the games.';
const failDeleteGame = 'Error when trying to delete a video game';
const noGameMatchID = 'No game found with that ID.';
const gameSuccessDeleted = 'Video game deleted successfully.';
const failUpdateGame = 'Failed to update the video game.';
const updateGameSuccess = 'Video game updated successfully';

/// ADMIN ~~~~
const accesDeniedADM = 'Access denied. You do not have access here.';

const failToFoundUsers = 'Failed to retrieve the users';
const failCheckID = 'Failed to check ID.';
const userDeleted = 'User deleted successfully.';
const failToDeleteUser = 'Failed to delete user.';
const failToFoundAdmins = 'Failed to retrieve administrators';
const newAdmin = 'New admin added successfully';
const error_newAdminfail = 'Failed to add admin.';

const adminDeleted = 'Admin deleted successfully';
const error_noAdminID = 'No admin found with that ID.';
const failToAddAdmin = 'Failed to remove administrator.';

export const responseMsg = {
	failToAddAdmin,
	error_noAdminID,
	adminDeleted,
	error_newAdminfail,

	newAdmin,
	failToFoundAdmins,
	failToDeleteUser,
	failCheckID,
	userDeleted,

	failToFoundUsers,

	accesDeniedADM,

	failUpdateGame,
	updateGameSuccess,

	noGameMatchID,
	gameSuccessDeleted,

	failDeleteGame,

	notFoundGamesInProperty,
	error_obtainUserGames,

	error_profileData,
	gameDataRequired,
	error_failCreateGame,
	gameCreated,

	error_defaultMSGRegister,
	error_MissingData,
	registerDataRequired,
	error_emailAlreadyExists,
	success_register,

	error_defaultMSGLogin,
	loginDataRequired,
	error_wrongData,
	error_emailDoesntExists,
	success_login,

	error_authFail,
	error_accessDenied,

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
};
