"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Meals", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      menu_id: {
        type: Sequelize.INTEGER,
        OnDelete: "CASCADE",
        reference: {
          model: "Menu",
          key: "id",
          as: "menu_id"
        }
      },
      order_id: {
        type: Sequelize.INTEGER,
        OnDelete: "CASCADE",
        reference: {
          model: "Order",
          key: "id",
          as: "order_id"
        }
      },
      meal_name: {
        type: Sequelize.STRING
      },
      meal_description: {
        type: Sequelize.STRING
      },
      meal_price: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Meals");
  }
};
