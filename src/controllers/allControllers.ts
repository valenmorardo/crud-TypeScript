import { registerUser } from './registerNewUser/registerUser';
import { loginUser } from './loginUser/loginUser.controller';
import { profileUser } from './profile/profile.controller';

import { createNewGame } from './profile/createNewGame.controller';
import { getMyGames } from './profile/myGames.controller';

import { deleteAGame } from './profile/deleteAGame.controller';

import { getAllUsers } from './admin/getAllProfiles.controller';
import { deleteAUser } from './admin/deleteAUser.controller';
import { addAdmin } from './admin/addAdmin.controller';

import { updateAGame } from './profile/updateAGame.controller';
import { getAllAdmins } from './admin/getAllAdmins.controller';

import { removeAdmin } from './admin/removeAdmin.controller';

export {
	registerUser,
	loginUser,
	profileUser,
	createNewGame,
	getMyGames,
	deleteAGame,
	getAllUsers,
	deleteAUser,
	addAdmin,
	updateAGame,
	getAllAdmins,
	removeAdmin,
};
