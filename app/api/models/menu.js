"use strict";

module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define("Menu", {
    menu_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Menu.associate = function(models) {
    Menu.hasMany(models.Meal, {
      foreignKey: "menu_id"
    });
  };
  return Menu;
};
