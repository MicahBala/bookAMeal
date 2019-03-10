import Joi from "joi";
import models from "../models";

class MealsController {
  //   get all meals
  getAllMeals(req, res) {
    models.Meal.findAll().then(meal => {
      res.status(200).send({
        success: true,
        message: "meals retrieved successfully",
        meal
      });
    });
  }

  //   add a meal
  addMeal(req, res) {
    const schema = {
      meal_name: Joi.string().required(),
      meal_description: Joi.string().required(),
      meal_price: Joi.string().required()
    };

    const meal = Joi.validate(req.body, schema);

    if (meal.error) {
      return res.status(404).send(meal.error.message);
    }

    const { meal_name, meal_description, meal_price } = req.body;

    return models.Meal.create({ meal_name, meal_description, meal_price }).then(
      meals =>
        res.status(200).send({
          success: true,
          message: "meal added successfully",
          meals
        })
    );
  }

  // delete a meal
  deleteMeal(req, res) {
    models.Meal.destroy({ where: { id: req.params.id } }).then(() =>
      res.status(200).send({
        success: true,
        message: "meal deleted successfully"
      })
    );
  }

  // update meal info
  updateMeal(req, res) {
    models.Meal.findAll().then(mealFound => {
      models.Meal.update(
        {
          meal_name: req.body.meal_name || mealFound.meal_name,
          meal_description:
            req.body.meal_description || mealFound.meal_description,
          meal_price: req.body.meal_price || mealFound.meal_price
        },
        { returning: true, where: { id: req.params.id } }
      ).then(([updatedMeal]) =>
        res.status(200).send({
          success: true,
          message: "meal updated successfully",
          updatedMeal
        })
      );
    });
  }
}

const mealsController = new MealsController();

export default mealsController;
