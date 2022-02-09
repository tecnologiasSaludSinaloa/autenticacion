import { Router } from 'express';
import * as systemController from '../controllers/systemController.js';
const router = Router();

router.get('/:id', systemController.getSystem);
router.post('/:id', systemController.setSystem);
router.get('/', systemController.getSystems);
router.post('/', systemController.postSystem);

export default router;