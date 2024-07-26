const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

const DetailPesanan = sequelize.define("detail_pesanan", {
  id_dpsn: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  nopsn: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  kode_m: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  jml_psn: {
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

module.exports = DetailPesanan;
