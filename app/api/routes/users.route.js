import express from 'express';
import usersControler from '../mealsController/users.controller';

const router = express.Router();

// add new user
router.post('/auth/signup', usersControler.addNewUser);

// login a user
router.post('/auth/login', usersControler.loginUser);

export default router;
