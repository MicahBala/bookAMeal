import express from 'express';
import usersControler from '../mealsController/users.controller';

const router = express.Router();

// add new user
router.post('/auth/signup', usersControler.addNewUser);

export default router;
