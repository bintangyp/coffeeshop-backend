// Definisikan model Kasir
const Kasir = require("../models/Kasir");

const bcrypt = require("bcrypt");

exports.getAllKasir = async (req, res) => {
  try {
    const kasir = await Kasir.findAll();
    res.json({ data: kasir });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.createKasir = async (req, res) => {
  const { id_k, username, password, jabatan, alamat_k, telp_k } = req.body;
  try {
    const newKasir = await Kasir.create({
      id_k,
      username,
      password,
      jabatan,
      alamat_k,
      telp_k,
    });
    res.status(201).json(newKasir);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "kasirController: " + err.message });
  }
};

exports.getKasirById = async (req, res) => {
  try {
    const kasir = await Kasir.findOne({
      where: { kode_s: req.params.id },
    });
    if (!kasir) {
      return res.status(404).json({ error: "NOTFOUND" });
    }
    res.json({ data: kasir });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

exports.updateKasir = async (req, res) => {
  try {
    const { id_k, username, password, jabatan, alamat_k, telp_k } = req.body;

    const kasir = await Kasir.findByPk(req.params.id);
    if (!kasir) {
      return res.status(404).json({ error: "NOTFOUND" });
    }
    kasir.username = username;
    if (password) {
      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      kasir.password = await bcrypt.hash(password, salt);
    }
    await kasir.save();
    res.json(kasir);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a kasir
exports.deleteUser = async (req, res) => {
  try {
    const kasir = await Kasir.findByPk(req.params.id);
    if (!kasir) {
      return res.status(404).json({ error: "NOTFOUND" });
    }
    await kasir.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
