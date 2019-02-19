import express from 'express';
import menuController from '../mealsController/menu.controller';

const router = express.Router();

// add a menu
router.post('/api/v1/menu', menuController.addMenu);

// get all menu
router.get('/api/v1/menu', menuController.getAllMenu);

export default router;
