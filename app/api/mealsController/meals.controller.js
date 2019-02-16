import mealsDb from "../db/meals.db";

class MealsController {
  // get home page
  getHomePage(req, res) {
    return res.send("Welcome to the meal booking app");
  }

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
    mealsDb.find((delMeal, index) => {
      if (delMeal.id == parseInt(req.params.id)) {
        mealsDb.splice(index, 1);
        console.log(mealsDb[index]);

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
}

const mealsController = new MealsController();

export default mealsController;
