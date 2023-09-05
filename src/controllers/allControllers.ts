import { registerUser } from './registerNewUser/registerUser';
import { loginUser } from './loginUser/loginUser.controller';
import { profileUser } from './profile/profile.controller';

import { createNewGame } from './profile/createNewGame.controller';
import { getMyGames } from './profile/myGames.controller';

import { deleteAGame } from './profile/deleteAGame.controller';

import { getAllProfiles } from './admin/getAllProfiles.controller';
import { deleteAUser } from './admin/deleteAUser.controller';
import { handlerIsAdmin } from './admin/handlerIsAdmin.controller';

export {
	registerUser,
	loginUser,
	profileUser,
	createNewGame,
	getMyGames,
	deleteAGame,
	getAllProfiles,
	deleteAUser,
	handlerIsAdmin
};
