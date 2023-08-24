import * as controller from '@controllers/controller';

import { Router } from 'express';
const router: Router = Router();

router.get('/', (req, res) => {
	res.json({ message: 'Welcome to my API' });
});

/* router.get('/getAllGames', controller.getAllGames);
router.post('/postNewGame', controller.postNewGame);
router.delete('/deleteAGame/:id', controller.deleteAGame);
router.patch('/patchAGame/:id', controller.patchAGame); */

export default router;
