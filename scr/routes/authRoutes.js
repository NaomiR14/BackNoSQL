import express from 'express';
import { registerUser } from '../controllers/authController.js';

const router = express.Router();

//http://localhost:500/api/v0/auth/register
router.post('/register', registerUser);

///router.post('/login', authenticateUser);

export default router;