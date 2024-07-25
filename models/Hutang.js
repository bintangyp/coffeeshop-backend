const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

const Hutang = sequelize.define("Hutang", {
  kode_h: {
    type: DataTypes.STRING(50),
    primaryKey: true,
    allowNull: false,
  },
  nofaktur: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  kode_s: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  tgl_tempo: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(50),
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
