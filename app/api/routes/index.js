import express from "express";
import mealsRoute from "./meals.route";
import menuRoute from "./menu.route";

const router = express.Router();

router.use(mealsRoute);
router.use(menuRoute);

router.get("/", (req, res) => {
  return res.send("Welcome to the meal booking app");
});

export default router;
