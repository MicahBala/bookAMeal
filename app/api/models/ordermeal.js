'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderMeal = sequelize.define('OrderMeal', {
    oreder_id: DataTypes.INTEGER,
    meal_id: DataTypes.INTEGER
  }, {});
  OrderMeal.associate = function(models) {
    // associations can be defined here
  };
  return OrderMeal;
};