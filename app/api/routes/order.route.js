import express from "express";
import orderController from "../mealsController/orders.controller";

const router = express.Router();

// place order
router.post("/api/v1/order", orderController.placeOrder);

// modify order
router.put("/api/v1/order/:id", orderController.modifyOrder);

export default router;
