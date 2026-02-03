import express from 'express';
import { getProfile, updateProfile, getUserById } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// All routes are protected
router.use(protect);

router.get('/profile', getProfile);
router.put('/profile', updateProfile);
router.get('/:id', getUserById);

export default router;
