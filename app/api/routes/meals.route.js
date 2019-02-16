import express from "express";
import mealsController from "../mealsController/meals.controller";

const router = express.Router();

router.get("/", mealsController.getHomePage);

// get all meals
router.get("/api/v1/meals", mealsController.getAllMeals);

// add a meal
router.post("/api/v1/meals", mealsController.addMeal);

// delete a meal
router.delete("/api/v1/meals/:id", mealsController.deleteMeal);

export default router;
