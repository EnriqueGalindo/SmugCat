import express from 'express';
import withAuth from './middleware/withAuth';
import { register, login } from './public/authentication';

const router = express.Router();

// Public
router.post('/register', register)
router.post('/login', login)

// Protected
router.get('/checktoken', withAuth, (err, res) => {
    res.sendStatus(200);
})



export default router;