import express from "express";
import mealsController from "../mealsController/meals.controller";

const router = express.Router();

router.get("/", mealsController.getHomePage);

// get all meals
router.get("/api/v1/meals", mealsController.getAllMeals);

// add a meal
router.post("/api/v1/meals", mealsController.addMeal);

export default router;
