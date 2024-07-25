const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");
const bcrypt = require("bcrypt");

const Users = sequelize.define(
  "Users",
  {
    id_u: {
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
          msg: "PASS_MIN_LENGTH",
        },
      },
    },
    jabatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat_u: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telp_u: {
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
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      },
      beforeUpdate: async (user) => {
        if (user.changed("password")) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
  }
);

module.exports = Users;
