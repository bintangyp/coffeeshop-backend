const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

const Menu = sequelize.define("menu", {
  kode_m: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  nama_m: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  h_jual: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  h_pokok: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gambar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
});

module.exports = Menu;
