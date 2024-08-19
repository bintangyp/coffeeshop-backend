const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

const DetailPembelian = sequelize.define("detail_pembelian", {
  kode_dp: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  nopmb: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  kode_b: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  jml_beli: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  h_beli: {
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

module.exports = DetailPembelian;
