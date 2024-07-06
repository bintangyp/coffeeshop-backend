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
    alamat_k: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telp_k: {
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
      beforeCreate: async (kasir) => {
        const salt = await bcrypt.genSalt(10);
        kasir.password = await bcrypt.hash(kasir.password, salt);
      },
      beforeUpdate: async (kasir) => {
        if (kasir.changed("password")) {
          const salt = await bcrypt.genSalt(10);
          kasir.password = await bcrypt.hash(kasir.password, salt);
        }
      },
    },
  }
);

module.exports = Kasir;
