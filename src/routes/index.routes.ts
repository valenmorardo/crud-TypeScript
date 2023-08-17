import * as controller from '@controllers/controller';

import { Router } from 'express';
const router = Router();

router.get('/api', (req, res) => {
	res.json({ message: 'Welcome to my API' });
});

router.get('/getAllGames', controller.getAllGames);

router.post('/postNewGame', controller.postNewGame);

router.put('/putX', controller.putX);
router.delete('/deleteX', controller.deleteX);
router.patch('/patchX', controller.patchX);

export default router;
