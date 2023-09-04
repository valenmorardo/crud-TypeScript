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
	/* validations.validateLoginFields, */
	/* validations.validateLoginData, */
	controllers.loginUser,
);
//~~~~~~~~~

// Profile routes
router.use(
	'/profile',
	middlewares.verifyAuthToken,
	middlewares.payloadAuthTokenVerify,
);

router.get('/profile', controllers.profileUser);
router.post(
	'/profile/postNewGame',
	/* validations.validateGameFields, */ controllers.createNewGame,
);
router.get('/profile/myGames', controllers.getMyGames);
router.delete(
	'/profile/myGames/deleteAGame/:id',
	/* validations.validateParamsId, */ controllers.deleteAGame,
);
//~~~~~~~~~

// home // all games
/* router.use('/allGames', middlewares.verifyAuthToken, middlewares.payloadAuthTokenVerify)
router.get('/allGames'); */
//~~~~~~~~~

// Admin routes
router.use(
	'/admin',
	middlewares.verifyAuthToken,
	middlewares.payloadAuthTokenVerify,
	middlewares.verifyIsAdmin,
);

router.get('/admin/getAllProfiles' /* controller.getAllProfiles */);
router.delete('/admin/deleteProfile' /* controller.deleteProfile */);
router.put('/admin/newAdmin' /* controller.newAdmin */);
//~~~~~~~~~

router.use(errorHandler);

export default router;
