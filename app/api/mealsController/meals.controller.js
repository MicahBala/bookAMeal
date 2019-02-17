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
    if (!req.body.name || !req.body.description || !req.body.price) {
      return res.status(404).send({
        success: false,
        message: "name, description and price required"
      });
    }

    const meal = {
      id: mealsDb.length + 1,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      date: Date.now()
    };

    mealsDb.push(meal);

    return res.status(200).send({
      success: true,
      message: "meal added successfully",
      meals: mealsDb[mealsDb.length - 1]
    });
  }

  // delete a meal
  deleteMeal(req, res) {
    mealsDb.map((delMeal, index) => {
      if (delMeal.id === parseInt(req.params.id)) {
        mealsDb.splice(index, 1);

        return res.status(200).send({
          success: true,
          message: "meal deleted successfully"
        });
      }
    });

    return res.status(404).send({
      success: false,
      message: "meal not found"
    });
  }

  // update meal info
  updateMeal(req, res) {
    const mealToUpdate = mealsDb.find(
      updMeal => updMeal.id === parseInt(req.params.id)
    );

    if (!mealToUpdate)
      return res.status(404).send({
        success: false,
        message: "meal not found"
      });

    mealToUpdate.name = req.body.name;
    mealToUpdate.description = req.body.description;
    mealToUpdate.price = req.body.price;

    return res.status(200).send({
      success: true,
      message: "meal updated successfully"
    });
  }
}

const mealsController = new MealsController();

export default mealsController;
