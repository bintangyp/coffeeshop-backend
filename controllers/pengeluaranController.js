const Pengeluaran = require("../models/Pengeluaran.js");

exports.getAllPengeluaran = async (req, res) => {
  try {
    const datas = await Pengeluaran.findAll({
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

exports.getPengeluaranById = async (req, res) => {
  try {
    const pengeluaran = await Pengeluaran.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: { id_dpnj: req.params.id },
    });
    if (!pengeluaran) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    res.json({ data: pengeluaran });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.createPengeluaran = async (req, res) => {
  const { nopng, jenis_png, ket_png, biaya, id_u } = req.body;

  try {
    const pengeluaran = await Pengeluaran.create({
      nopng,
      jenis_png,
      ket_png,
      biaya,
      id_u,
    });
    res.status(201).json(pengeluaran);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.updatePengeluaran = async (req, res) => {
  try {
    const { jenis_png, ket_png, biaya, id_u } = req.body;

    const pengeluaran = await Pengeluaran.findByPk(req.params.id);
    if (!pengeluaran) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    pengeluaran.jenis_png = jenis_png;
    pengeluaran.ket_png = ket_png;
    pengeluaran.biaya = biaya;
    pengeluaran.id_u = id_u;
    await pengeluaran.save();
    res.json(pengeluaran);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.deletedPengeluaran = async (req, res) => {
  try {
    const pengeluaran = await Pengeluaran.findByPk(req.params.id);
    if (!pengeluaran) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    await pengeluaran.destroy();
    res.json({ msg: "SUCCESSFULL" }).status(204);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};
