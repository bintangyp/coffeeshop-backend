const bPokok = require("../models/BahanPokok");

exports.getAllbPokok = async (req, res) => {
  try {
    const datas = await bPokok.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).json({ data: datas });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.getbPokokById = async (req, res) => {
  try {
    const bpokok = await bPokok.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: { kode_b: req.params.id },
    });
    if (!bpokok) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    res.json({ data: bpokok });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.createbPokok = async (req, res) => {
  const { kode_b, nama_b, satuan, h_pokok, stok } = req.body;

  try {
    const bpokok = await bPokok.create({
      kode_b,
      nama_b,
      satuan,
      h_pokok,
      stok,
    });
    res.status(201).json(bpokok);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.updatebPokok = async (req, res) => {
  try {
    const { nama_b, satuan, h_pokok, stok } = req.body;
    const bpokok = await bPokok.findByPk(req.params.id);
    if (!bpokok) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    bpokok.nama_b = nama_b;
    bpokok.satuan = satuan;
    bpokok.h_pokok = h_pokok;
    bpokok.stok = stok;
    await bpokok.save();
    res.json(bpokok);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.deletebPokok = async (req, res) => {
  try {
    const bpokok = await bPokok.findByPk(req.params.id);
    if (!bpokok) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    await bpokok.destroy();
    res.json({ msg: "SUCCESSFULL" }).status(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
