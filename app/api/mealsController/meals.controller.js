import mealsDb from '../db/meals.db';

class MealsController {
  // get home page
  static getHomePage(req, res) {
    return res.send('Welcome to the meal booking app');
  }

  //   get all meals
  static getAllMeals(req, res) {
    res.status(200).send({
      success: true,
      message: 'meals retrieved successfully',
      meals: mealsDb,
    });
  }
}

const mealsController = new MealsController();

export default mealsController;
