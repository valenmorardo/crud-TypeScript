import * as controller from '@controllers/allControllers';

import { Router } from 'express';
const router: Router = Router();

router.get('/', (req, res) => {
	res.json({ message: 'Welcome to my API' });
});

router.post('/register' /* controller.register */);
router.post('/login' /* controller.login */);
router.get('/profile' /* controller.profile */);

router.post('/profile/postNewGame' /* controller.postNewGame */);
router.get('/profile/getAllGames' /* controller.getAllGames */);
router.delete('/profile/deleteAGame/:id' /* controller.deleteAGame */);
router.patch('/profile/patchAGame/:id' /* controller.patchAGame */);

router.get('/admin/getAllProfiles' /* controller.getAllProfiles */);
router.delete('/admin/deleteProfile' /* controller.deleteProfile */);
router.post('/admin/newAdmin' /* controller.newAdmin */);

export default router;
