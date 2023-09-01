import * as controllers from '@controllers/allControllers';
import * as validations from '@libs/validations/allValidations';
import * as middlewares from '@middlewares/allMiddlewares.routes';

import { Router } from 'express';
const router: Router = Router();

//~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//main route ---> /api
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~

router.get('/', (_req, res) => {
	res.json({ message: 'Welcome to my videogames CRUD API' });
});

// login & register
router.post(
	'/register',
	validations.validateRegisterFields,
	validations.userAlreadyRegistered,
	middlewares.encryptPassword,
	controllers.registerNewUser,
);
router.post(
	'/login',
	validations.validateLoginFields,
	validations.validateLoginData,
	controllers.loginUser,
);
//~~~~~~~~~

// Profile routes
router.use('/profile', middlewares.verifyAuthToken, middlewares.payloadAuthTokenVerify);

router.get('/profile', controllers.profileUser);
router.post('/profile/postNewGame', validations.validateNewGameFields, controllers.createNewGame);
router.get('/profile/myGames', controllers.getMyGames);
router.delete('/profile/myGames/deleteAGame/:id' /* controller.deleteAGame */);
router.patch('/profile/myGames/patchAGame/:id' /* controller.patchAGame */);
//~~~~~~~~~

// home // all games
/* router.use('/allGames', middlewares.verifyAuthToken, middlewares.payloadAuthTokenVerify)
router.get('/allGames'); */
//~~~~~~~~~

// Admin routes
/* router.use(
	'/admin' middlewares.verifyAuthToken, middlewares.verifyIsAdmin,
); */

router.get('/admin/getAllProfiles' /* controller.getAllProfiles */);
router.delete('/admin/deleteProfile' /* controller.deleteProfile */);
router.post('/admin/newAdmin' /* controller.newAdmin */);
//~~~~~~~~~

export default router;
