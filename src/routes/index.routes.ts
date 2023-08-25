import * as controllers from '@controllers/allControllers';
import * as validations from '@libs/validations/allValidations'
import * as middlewares from '@middlewares/allMiddlewares.routes'

import { Router } from 'express';
const router: Router = Router();


router.get('/', (_req, res) => {
	res.json({ message: 'Welcome to my API' });
});

router.post('/register', validations.validateRegister, middlewares.encryptPassword, controllers.registerNewUser);
router.post('/login'/* controller.login */);
router.get('/profile' /* controller.profile */);

router.post('/profile/postNewGame' /* controller.postNewGame */);
router.get('/profile/getAllGames' /* controller.getAllGames */);
router.delete('/profile/deleteAGame/:id' /* controller.deleteAGame */);
router.patch('/profile/patchAGame/:id' /* controller.patchAGame */);

router.get('/admin/getAllProfiles' /* controller.getAllProfiles */);
router.delete('/admin/deleteProfile' /* controller.deleteProfile */);
router.post('/admin/newAdmin' /* controller.newAdmin */);

export default router;
