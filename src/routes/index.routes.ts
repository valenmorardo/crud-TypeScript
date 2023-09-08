import * as controllers from '@controllers/allControllers';
import * as middlewares from '@middlewares/allMiddlewares.routes';

import { errorHandler } from '@controllers/errorHandler';

import { Router } from 'express';
const router: Router = Router();

//~~~~~~~~~~~~~~~~~~~~~~~~~~
//main route ---> /api
//~~~~~~~~~~~~~~~~~~~~~~~~~~

router.get('/', (_req, res) => {
	res.json({
		message: 'Welcome to my videogames CRUD API',
		Available_routes: {
			Register: {
				route: '/api/register',
				info: 'POST Method. Requires a body.',
			},

			Login: {
				route: '/api/login',
				info: 'POST Method. Requires a body.',
			},

			Profile: {
				Profile: {
					route: '/api/profile',
					info: 'GET Method.',
				},

				PostNewGame: {
					route: '/api/profile/postNewGame',
					info: 'POST Method. Requires a body',
				},

				MyGames: {
					route: '/api/profile/myGames',
					info: ' GET Method.',
				},

				DeleteAGame: {
					route: '/api/profile/myGames/deleteAGame/',
					info: 'DELETE Method. Requires an ID by params ---> .../deleteAGame/:id',
				},

				UpdateAGame: {
					route: '/api/profile/myGames/updateAGame/',
					info: 'PUT Method. Requires an ID by params ---> .../updateAGame/:id',
				},
			},

			Admin: {
				GetProfiles: {
					route: '/api/admin/getAllProfiles',
					info: 'GET Method.',
				},

				DeleteAUser: {
					route: '/api/admin/deleteAUser/',
					info: 'DELETE Method. Requires an ID by params ---> .../deleteAUser/:id',
				},
				handlerIsAdmin: {
					route: '/api/admin/handlerIsAdmin/',
					info: 'PUT Method. Requires an ID by params and a body ---> .../handlerIsAdmin/:id',
				},
			},
		},
	});
});

// login & register
router.post(
	'/register',
	middlewares.registerFieldsValidator,
	middlewares.emailExistenceValidator,
	middlewares.encryptPassword,
	controllers.registerUser,
);
router.post(
	'/login',
	middlewares.loginFieldsValidator,
	middlewares.loginDataValidator,
	controllers.loginUser,
);
//~~~~~~~~~

// Profile routes
router.use(
	'/profile',
	middlewares.authTokenValidator,
	middlewares.payloadIDExcistenseValidator,
);

router.get('/profile', controllers.profileUser);
router.post(
	'/profile/postNewGame',
	middlewares.createGameFieldsValidator,
	controllers.createNewGame,
);
router.get('/profile/myGames', controllers.getMyGames);
router.delete(
	'/profile/myGames/deleteAGame/:id',
	middlewares.paramsGameIDValidator,
	controllers.deleteAGame,
);
router.put(
	'/profile/myGames/updateAGame/:id',
	middlewares.paramsGameIDValidator,
	controllers.updateAGame,
);
//~~~~~~~~~

// Admin routes
router.use(
	'/admin',
	middlewares.authTokenValidator,
	middlewares.payloadIDExcistenseValidator,
	middlewares.verifyIsAdmin,
);

router.get('/admin/getAllUsers', controllers.getAllUsers);
router.delete(
	'/admin/deleteAUser/:userId',
	middlewares.adminIDValidator,
	controllers.deleteAUser,
);
router.get('/admin/getAllAdmins', controllers.getAllAdmins);

router.post(
	'/admin/handlerAdmins/add',
	middlewares.userIdBodyValidator,
	controllers.addAdmin,
);

router.delete(
	'/admin/handlerAdmins/remove/:adminId',
	middlewares.adminIDValidator,
	controllers.removeAdmin,
);
//~~~~~~~~~

router.use(errorHandler);

export default router;
