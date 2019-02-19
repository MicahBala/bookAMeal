import express from 'express';
import mealsController from '../mealsController/meals.controller';

const router = express.Router();

// get all meals
router.get('/api/v1/meals', mealsController.getAllMeals);

// add a meal
router.post('/api/v1/meals', mealsController.addMeal);

// delete a meal
router.delete('/api/v1/meals/:id', mealsController.deleteMeal);

// update a meal
router.put('/api/v1/meals/:id', mealsController.updateMeal);

export default router;
