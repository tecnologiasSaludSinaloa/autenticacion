import { Router } from 'express';
import * as authController from '../controllers/authController.js';
const router = Router();

router.get('/:id', actionController.getAction);
router.post('/:id', actionController.setAction);

export default router;