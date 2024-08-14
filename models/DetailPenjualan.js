const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

const DetailPenjualan = sequelize.define("detail_penjualan", {
  id_dpnj: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  nopnj: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  kode_m: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  jml_pnj: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  hpp: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  h_jual: {
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

module.exports = DetailPenjualan;
