import Joi from 'joi';
import mealsDb from '../db/meals.db';

class MealsController {
  //   get all meals
  getAllMeals(req, res) {
    mealsDb.findAll().then((meals) => {
      res.status(200).send({
        success: true,
        message: 'meals retrieved successfully',
        meals,
      });
    });
  }

  //   add a meal
  addMeal(req, res) {
    const schema = {
      name: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.string().required(),
    };

    const meal = Joi.validate(req.body, schema);

    if (meal.error) {
      return res.status(404).send(meal.error.message);
    }

    const { name, description, price } = req.body;

    return mealsDb.create({ name, description, price }).then(meals => res.status(200).send({
      success: true,
      message: 'meal added successfully',
      meals,
    }));
  }

  // delete a meal
  deleteMeal(req, res) {
    mealsDb.destroy({ where: { id: req.params.id } }).then(() => res.status(200).send({
      success: true,
      message: 'meal deleted successfully',
    }));
  }

  // update meal info
  updateMeal(req, res) {
    const { name, description, price } = req.body;
    mealsDb
      .update(
        { name, description, price },
        { returning: true, where: { id: req.params.id } },
      )
      .then(([updatedMeal]) => res.status(200).send({
        success: true,
        message: 'meal updated successfully',
        updatedMeal,
      }));
  }
}

const mealsController = new MealsController();

export default mealsController;
