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
			Register: '/api/register ---> POST Method. Requires a body',
			Login: '/api/login ---> POST Method. Requires a body',
			Profile: {
				Profile: '/api/profile ---> GET Method.',
				PostNewGame:
					'/api/profile/postNewGame ---> POST Method. Requires a body',
				MyGames: '/api/profile/myGames ---> GET Method.',
				DeleteAGame:
					'/api/profile/myGames/deleteAGame/:id ---> DELETE Method. Requires an ID by params',
				UpdateAGame:
					'/api/profile/myGames/updateAGame/:id ---> PUT Method. Requires an ID by params',
			},
			Admin: {
				GetProfiles: '/api/admin/getAllProfiles ---> GET Method.',
				DeleteAUser:
					'/api/admin/deleteAUser/:id ---> DELETE Method. Requires an ID by params.',
				handlerIsAdmin:
					'/api//admin/handlerIsAdmin/:id ---> PUT Method. Requires an ID by params and a body.',
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

// home // all games
/* router.use('/allGames', middlewares.verifyAuthToken, middlewares.payloadAuthTokenVerify)
	router.get('/allGames'); */
//~~~~~~~~~

// Admin routes
router.use(
	'/admin',
	middlewares.authTokenValidator,
	middlewares.payloadIDExcistenseValidator,
	middlewares.verifyIsAdmin,
);

router.get('/admin/getAllProfiles', controllers.getAllProfiles);
router.delete(
	'/admin/deleteAUser/:id',
	middlewares.paramsUserIDValidator,
	controllers.deleteAUser,
);
router.put(
	'/admin/handlerIsAdmin/:id',
	middlewares.paramsUserIDValidator,
	controllers.handlerIsAdmin,
);
//~~~~~~~~~

router.use(errorHandler);

export default router;
