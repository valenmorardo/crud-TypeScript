import { registerNewUser } from './register-NewUser/register-NewUser.controller';
import { loginUser } from './login-user/loginUser.controller';
import { profileUser } from './profile/profile-user/profile.controller';

import { createNewGame } from './profile/create-NewGame/createNewGame.controller';
import { getMyGames } from './profile/view-games/myGames.controller';

import { deleteAGame } from './profile/delete-game/deleteAGame.controller';


export {
	registerNewUser,
	loginUser,
	profileUser,
	createNewGame,
	getMyGames,
	deleteAGame,
};
