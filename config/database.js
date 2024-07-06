const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();
const sequelize = new Sequelize(process.env.DB_Name, process.env.DB_USER, "", {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

module.exports = sequelize;
