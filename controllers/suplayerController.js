const Suplayer = require("../models/Suplayer");

// Contoh method di controller untuk mendapatkan semua pengguna
exports.getAllSuplayers = async (req, res) => {
  try {
    const suplayers = await Suplayer.findAll();
    res.json({ data: suplayers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Contoh method di controller untuk menambah pengguna baru
exports.createSuplayer = async (req, res) => {
  const { kode_s, nama_s, alamat_s, telp_s } = req.body;
  console.log(req);
  try {
    const newSuplayer = await Suplayer.create({
      kode_s,
      nama_s,
      alamat_s,
      telp_s,
    });
    res.status(201).json(newSuplayer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.getOneSuplayer = async (req, res) => {
  try {
    const suplayer = await Suplayer.findOne({
      where: { kode_s: req.params.id },
    });
    if (!suplayer) {
      return res.status(404).json({ error: "Suplayer not found" });
    }
    res.json({ data: suplayer });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
