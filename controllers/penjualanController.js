const Penjualan = require("../models/Penjualan");

exports.getAllPenjualan = async (req, res) => {
  try {
    const datas = await Penjualan.findAll({
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

exports.getPenjualanById = async (req, res) => {
  try {
    const penjualan = await Penjualan.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: { nopnj: req.params.id },
    });
    if (!penjualan) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    res.json({ data: penjualan });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.createPenjualan = async (req, res) => {
  const { nopnj, n_pembeli, waktu_pnj, total_pnj, total_hpp } = req.body;

  try {
    const penjualan = await Penjualan.create({
      nopnj,
      n_pembeli,
      waktu_pnj,
      total_pnj,
      total_hpp,
    });
    res.status(201).json(penjualan);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.updatePenjualan = async (req, res) => {
  try {
    const { nopnj, n_pembeli, waktu_pnj, total_pnj, total_hpp } = req.body;

    const penjualan = await Penjualan.findByPk(req.params.id);
    if (!penjualan) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    penjualan.n_pembeli = n_pembeli;
    penjualan.waktu_pnj = waktu_pnj;
    penjualan.total_pnj = total_pnj;
    penjualan.total_hpp = total_hpp;
    penjualan.id_u = id_u;
    await penjualan.save();
    res.json(penjualan);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.deletePenjualan = async (req, res) => {
  try {
    const penjualan = await Penjualan.findByPk(req.params.id);
    if (!penjualan) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    await penjualan.destroy();
    res.json({ msg: "SUCCESSFULL" }).status(204);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};
