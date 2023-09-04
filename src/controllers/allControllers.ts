import { registerNewUser } from './register-NewUser/register-NewUser.controller';
import { loginUser } from './login-user/loginUser.controller';
import { profileUser } from './profile/profile.controller';

import { createNewGame } from './profile/createNewGame.controller';
import { getMyGames } from './profile/myGames.controller';

import { deleteAGame } from './profile/deleteAGame.controller';


export {
	registerNewUser,
	loginUser,
	profileUser,
	createNewGame,
	getMyGames,
	deleteAGame,
};
