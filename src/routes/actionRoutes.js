import { Router } from 'express';
import * as actionController from '../controllers/actionController.js';
const router = Router();

router.get('/:id', actionController.getAction);
router.post('/:id', actionController.setAction);
router.get('/', actionController.getActions);
router.post('/', actionController.postAction);

export default router;