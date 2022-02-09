import { Router } from 'express';
import * as userController from '../controllers/userController.js';
const router = Router();

router.get('/:id', userController.getUser);
router.post('/:id', userController.setUser);
router.get('/', userController.getUsers);
router.post('/', userController.postUser);

export default router;