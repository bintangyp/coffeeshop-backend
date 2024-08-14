const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

const Penjualan = sequelize.define("penjualan", {
  nopnj: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  n_pembeli: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  waktu_pnj: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  total_pnj: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  total_hpp: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  total_laba: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  status_pnj: {
    type: DataTypes.ENUM("terjual", "pesanan", "diproses"),
    allowNull: false,
    defaultValue: "pesanan",
  },
  u_add: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  u_update: {
    type: DataTypes.STRING,
    allowNull: true,
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

module.exports = Penjualan;
