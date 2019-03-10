"use strict";
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define("Meal", {
    menu_id: {
      type: DataTypes.INTEGER
    },
    order_id: {
      type: DataTypes.INTEGER
    },
    meal_name: {
      type: DataTypes.STRING
    },
    meal_description: {
      type: DataTypes.STRING
    },
    meal_price: {
      type: DataTypes.STRING
    }
  });
  Meal.associate = function(models) {
    Meal.belongsTo(models.Menu, {
      foreignKey: "menu_id",
      onDelete: "CASCADE"
    });
    Meal.belongsToMany(models.Order, {
      through: "OrderMeal",
      foreignKey: "order_id",
      onDelete: "CASCADE"
    });
  };
  return Meal;
};
