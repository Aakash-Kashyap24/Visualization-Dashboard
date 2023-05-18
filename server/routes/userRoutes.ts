import express from 'express';
import { login, registerAdmin } from '../controller/userController';


const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login', login);



export const userRoutes = router;
