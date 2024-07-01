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
  const { kode, nama, alamat, telp } = req.body;
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
    res.status(500).json({ error: "Internal Server Error" });
  }
};
