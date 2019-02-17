import express from "express";
import menuController from "../mealsController/menu.controller";

const router = express.Router();

// add a menu
router.post("/api/v1/menu", menuController.addMenu);

export default router;
