import { Router } from 'express';
import * as logController from '../controllers/logController.js';
const router = Router();

router.get('/:id', logController.getLog);
router.get('/', logController.getLogs);
router.post('/', logController.postLog);

export default router;