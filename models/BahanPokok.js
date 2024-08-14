const bcrypt = require("bcrypt");
const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

const BahanPokok = sequelize.define("bahan_pokok", {
  kode_b: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  nama_b: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  satuan: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  h_pokok: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  stok: {
    type: DataTypes.DOUBLE,
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

module.exports = BahanPokok;
