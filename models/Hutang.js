const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

const Hutang = sequelize.define("Hutang", {
  nohutang: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  nopmb: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  kode_s: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  waktu_tempo: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("lunas", "belum lunas"),
    allowNull: false,
  },
  total_hutang: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  sisa: {
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

module.exports = Hutang;
