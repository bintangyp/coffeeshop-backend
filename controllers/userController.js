// Definisikan model User
const User = require("../models/Users");

const bcrypt = require("bcrypt");

exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.findAll();
    res.json({ data: user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  const { id_u, username, password, jabatan, alamat_u, telp_u } = req.body;
  try {
    const newUser = await User.create({
      id_u,
      username,
      password,
      jabatan,
      alamat_u,
      telp_u,
    });
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    const msg = err.errors[0].message;
    res.status(500).json({ error: msg });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id_k: req.params.id },
    });
    if (!user) {
      return res.status(404).json({ error: "NOTFOUND" });
    }
    res.json({ data: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id_k, username, password, jabatan, alamat_k, telp_k } = req.body;

    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "NOTFOUND" });
    }
    user.username = username;
    if (password) {
      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "NOTFOUND" });
    }
    await user.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
