const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

const Pengeluaran = sequelize.define("pengeluaran", {
  nopng: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  jenis_png: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  ket_png: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  biaya: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_k: {
    type: DataTypes.STRING(10),
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

module.exports = Pengeluaran;
