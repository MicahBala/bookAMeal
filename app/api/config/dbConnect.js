// Create connection
const Sequelize = require("sequelize");

module.exports = new Sequelize("bookameal", "postgres", "micahbala", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
