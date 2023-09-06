import * as controllers from '@controllers/allControllers';
import * as middlewares from '@middlewares/allMiddlewares.routes';

import { errorHandler } from '@controllers/errorHandler';

import { Router } from 'express';
const router: Router = Router();

//~~~~~~~~~~~~~~~~~~~~~~~~~~
//main route ---> /api
//~~~~~~~~~~~~~~~~~~~~~~~~~~

router.get('/', (_req, res) => {
	res.json({ message: 'Welcome to my videogames CRUD API' });
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
	middlewares.createGameFieldsValidator, controllers.createNewGame,
);
router.get('/profile/myGames', controllers.getMyGames);
router.delete(
	'/profile/myGames/deleteAGame/:id',
	middlewares.paramsGameIDValidator, controllers.deleteAGame,
);
router.put('/profile/myGames/updateAGame/:id', middlewares.paramsGameIDValidator, controllers.updateAGame)
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
router.delete('/admin/deleteProfile/:id', middlewares.paramsUserIDValidator, controllers.deleteAUser);
router.put('/admin/handlerIsAdmin/:id', middlewares.paramsUserIDValidator, controllers.handlerIsAdmin);
//~~~~~~~~~

router.use(errorHandler);

export default router;
