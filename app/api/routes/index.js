import express from 'express';
import mealsRoute from './meals.route';
import menuRoute from './menu.route';
import orderRoute from './order.route';
import usersRoute from './users.route';

const router = express.Router();

router.use(mealsRoute);
router.use(menuRoute);
router.use(orderRoute);
router.use(usersRoute);

router.get('/', (req, res) => res.send('Welcome to the meal booking app'));

export default router;
