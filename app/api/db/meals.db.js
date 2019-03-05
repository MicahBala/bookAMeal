import Sequelize from "sequelize";
import db from "../config/dbConnect";

const Meal = db.define("mealtbl", {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.DATE
  }
});

export default Meal;
