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
    tipe_trans: {
      type: DataTypes.ENUM({
        values: ["jual", "beli"],
      }),
      allowNull: false,
    },
    nopmb: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    nopnj: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    nopng: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    waktu_trans: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total_trans: {
      type: DataTypes.DOUBLE,
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
        if (!transaksi.nopmb && !transaksi.nopnj && !transaksi.nopng) {
          throw new Error("Either nopmb or nopnj or nopng must be provided.");
        }
      },
      beforeUpdate: (transaksi, options) => {
        if (!transaksi.nopmb && !transaksi.nopnj && !transaksi.nopng) {
          throw new Error("Either nopmb or nopnj or nopng must be provided.");
        }
      },
    },
  }
);

module.exports = Transaksi;
