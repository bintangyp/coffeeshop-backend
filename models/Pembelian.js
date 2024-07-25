const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

const Pembelian = sequelize.define("pembelian", {
  nofaktur: {
    type: DataTypes.STRING(50),
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  kode_s: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  tgl_pmb: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  tgl_tempo: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status_pmb: {
    type: DataTypes.ENUM({
      values: ["cash", "hutang"],
    }),
    allowNull: false,
  },
  total_pmb: {
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

module.exports = Pembelian;
