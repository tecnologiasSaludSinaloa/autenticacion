import { Router } from 'express';
import * as rolController from '../controllers/rolController.js';
const router = Router();

router.get('/:id', rolController.getRol);
router.post('/:id', rolController.setRol);
router.get('/', rolController.getRoles);
router.post('/', rolController.postRol);

export default router;