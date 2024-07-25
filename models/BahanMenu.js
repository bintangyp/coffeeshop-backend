const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

const BahanMenu = sequelize.define("bahan_menu", {
  kode_bm: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  kode_m: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  kode_b: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  jml_pakai: {
    type: DataTypes.INTEGER,
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

module.exports = BahanMenu;
