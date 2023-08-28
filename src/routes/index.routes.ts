import * as controllers from '@controllers/allControllers';
import * as validationsFields from '@libs/validations/allValidations'
import * as middlewares from '@middlewares/allMiddlewares.routes'

import { Router } from 'express';
const router: Router = Router();


router.get('/', (_req, res) => {
	res.json({ message: 'Welcome to my videogames CRUD API' });
});

router.post('/register', validationsFields.validateRegister, middlewares.encryptPassword, controllers.registerNewUser);
router.post('/login'/* controller.login */);

router.get('/allGames')

router.get('/profile' /* controller.profile */);
router.get('/profile/myGames')
router.delete('/profile/myGames/deleteAGame/:id' /* controller.deleteAGame */);
router.patch('/profile/myGames/patchAGame/:id' /* controller.patchAGame */);
router.post('/profile/postNewGame' /* controller.postNewGame */);

router.get('/admin/getAllProfiles' /* controller.getAllProfiles */);
router.delete('/admin/deleteProfile' /* controller.deleteProfile */);
router.post('/admin/newAdmin' /* controller.newAdmin */);

export default router;
