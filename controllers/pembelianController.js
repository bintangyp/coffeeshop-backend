const Pembelian = require("../models/Pembelian");

exports.getAllPembelians = async (req, res) => {
  try {
    const Pembelians = await Pembelian.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.json({ data: Pembelians });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createPembelian = async (req, res) => {
  const { nopmb, kode_s, waktu_pmb, waktu_tempo, status_pmb, total_pmb } =
    req.body;
  console.log(req);
  try {
    const newPembelian = await Pembelian.create({
      nopmb,
      kode_s,
      waktu_pmb,
      waktu_tempo,
      status_pmb,
      total_pmb,
    });
    res.status(201).json(newPembelian);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.getOnePembelian = async (req, res) => {
  try {
    const OnePembelian = await Pembelian.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: { nofaktur: req.params.id },
    });
    if (!OnePembelian) {
      return res.status(404).json({ error: "Pembelian not found" });
    }
    res.json({ data: OnePembelian });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

exports.updatePembelian = async (req, res) => {
  try {
    const { kode_s, waktu_pmb, waktu_tempo, status_pmb, total_pmb } = req.body;

    const pembelian = await Pembelian.findByPk(req.params.id);
    if (!pembelian) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    pembelian.kode_s = kode_s;
    pembelian.waktu_pmb = waktu_pmb;
    pembelian.waktu_tempo = waktu_tempo;
    pembelian.status_pmb = status_pmb;
    pembelian.total_pmb = total_pmb;
    await pembelian.save();
    res.json(pembelian);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.deletePembelian = async (req, res) => {
  try {
    const OnePembelian = await Menu.findByPk(req.params.id);
    if (!OnePembelian) {
      return res.status(404).json({ error: "NOTFOUND" });
    }
    await OnePembelian.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
