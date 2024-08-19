const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

const Transaksi = sequelize.define(
  "transaksi",
  {
    notrans: {
      type: DataTypes.STRING(10),
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    jenis_trans: {
      type: DataTypes.ENUM({
        values: ["jual", "beli", "hutang", "pembelian"],
      }),
      allowNull: false,
    },
    no_ref: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    masuk: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    keluar: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    waktu_trans: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    u_id: {
      type: DataTypes.STRING,
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
  },
  {
    hooks: {
      beforeCreate: (transaksi, options) => {
        if (!transaksi.masuk && !transaksi.keluar) {
          throw new Error("NOTRANSACTION");
        }
      },
      beforeUpdate: (transaksi, options) => {
        if (!transaksi.masuk && !transaksi.keluar) {
          throw new Error("NOTRANSACTION");
        }
      },
    },
  }
);

module.exports = Transaksi;
