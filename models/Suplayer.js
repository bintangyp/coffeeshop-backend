const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

// Definisikan model User
const Suplayer = sequelize.define("Suplayer", {
  // Kolom-kolom dalam tabel users
  kode_s: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  nama_s: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  alamat_s: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telp_s: {
    type: DataTypes.STRING(20),
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

module.exports = Suplayer;
