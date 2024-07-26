const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

const Pesanan = sequelize.define("pesanan", {
  nopsn: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  n_pemesan: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  waktu_psn: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status_psn: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  total_psn: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_u: {
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

module.exports = Pesanan;
