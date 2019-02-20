import Joi from "joi";
import mealsDb from "../db/meals.db";

class MealsController {
  //   get all meals
  getAllMeals(req, res) {
    res.status(200).send({
      success: true,
      message: "meals retrieved successfully",
      meals: mealsDb
    });
  }

  //   add a meal
  addMeal(req, res) {
    const schema = {
      name: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.string().required()
    };

    const meal = Joi.validate(req.body, schema);

    if (meal.error) {
      return res.status(404).send(meal.error.message);
    }

    const mealToAdd = {
      id: mealsDb.length + 1,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      date: Date.now()
    };

    mealsDb.push(mealToAdd);

    return res.status(200).send({
      success: true,
      message: "meal added successfully",
      meals: mealsDb[mealsDb.length - 1]
    });
  }

  // delete a meal
  deleteMeal(req, res) {
    mealsDb.map((delMeal, index) => {
      if (delMeal.id === parseInt(req.params.id, 10)) {
        mealsDb.splice(index, 1);

        return res.status(200).send({
          success: true,
          message: "meal deleted successfully"
        });
      } else {
        return res.status(404).send({
          success: false,
          message: "meal not found"
        });
      }
    });
  }

  // update meal info
  updateMeal(req, res) {
    const mealToUpdate = mealsDb.find(
      updMeal => updMeal.id === parseInt(req.params.id, 10)
    );

    if (!mealToUpdate) {
      return res.status(404).send({
        success: false,
        message: "meal not found"
      });
    }

    const schema = {
      name: Joi.string(),
      description: Joi.string(),
      price: Joi.string()
    };

    const result = Joi.validate(req.body, schema);
    if (result.error) {
      return res.status(404).send("meal not found");
    }

    mealToUpdate.name = req.body.name || mealToUpdate.name;
    mealToUpdate.description = req.body.description || mealToUpdate.description;
    mealToUpdate.price = req.body.price || mealToUpdate.price;

    return res.status(200).send({
      success: true,
      message: "meal updated successfully"
    });
  }
}

const mealsController = new MealsController();

export default mealsController;
