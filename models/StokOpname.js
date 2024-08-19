const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

const StokOpname = sequelize.define("stok_opname", {
  id_opname: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  waktu_opname: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  kode_b: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  jml_tercatat: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  jml_fisik: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  status_opname: {
    type: DataTypes.ENUM({
      values: ["sesuai", "tidak sesuai"],
    }),
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

module.exports = StokOpname;
