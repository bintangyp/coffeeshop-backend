const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Blacklist = sequelize.define("Blacklist", {
  token: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  expiresAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Blacklist;
