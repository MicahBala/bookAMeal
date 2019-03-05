import Sequelize from "sequelize";
import db from "../config/dbConnect";

const Meal = db.define("mealtbl", {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.STRING
  }
});

export default Meal;
