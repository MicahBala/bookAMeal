import express from "express";
import orderController from "../mealsController/orders.controller";

const router = express.Router();

// place order
router.post("/api/v1/order", orderController.placeOrder);

export default router;
