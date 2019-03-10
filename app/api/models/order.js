"use strict";
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    order_name: DataTypes.STRING
  });
  Order.associate = function(models) {
    Order.belongsToMany(models.Meal, {
      through: "OrderMeal",
      as: "meals",
      foreignKey: "order_id"
    });
  };
  return Order;
};
