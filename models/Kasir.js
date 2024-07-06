const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");
const bcrypt = require("bcrypt");

const Kasir = sequelize.define(
  "Kasir",
  {
    id_k: {
      type: DataTypes.STRING(10),
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 100],
          msg: "MIN_LENGTH",
        },
      },
    },
    jabatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat: {
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
  },
  {
    timestamps: true,
    hooks: {
      beforeCreate: async (user) => {
        const salt = await bycript.genSalt(10);
        user.password = await bycript.hash(user.password, salt);
      },
      beforeUpdate: async (user) => {
        if (user.changed("password")) {
          const salt = await bycript.genSalt(10);
          user.password = await bycript.hash(user.password, salt);
        }
      },
    },
  }
);

module.exports = Kasir;
