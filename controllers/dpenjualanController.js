const dPenjualan = require("../models/DetailPenjualan");

exports.getAlldPenjualan = async (req, res) => {
  try {
    const datas = await dPenjualan.findAll({
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

exports.getdPenjualanById = async (req, res) => {
  try {
    const dpenjualan = await dPenjualan.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: { id_dpnj: req.params.id },
    });
    if (!dpenjualan) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    res.json({ data: dpenjualan });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.createdPenjualan = async (req, res) => {
  const { id_dpnj, nopnj, kode_m, jml_pnj, hpp, h_jual } = req.body;

  try {
    const dpenjualan = await dPenjualan.create({
      id_dpnj,
      nopnj,
      kode_m,
      jml_pnj,
      hpp,
      h_jual,
    });
    res.status(201).json(dpenjualan);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.updatedPenjulalan = async (req, res) => {
  try {
    const { nopnj, kode_m, jml_pnj, hpp, h_jual } = req.body;

    const dpenjualan = await dPenjualan.findByPk(req.params.id);
    if (!dpenjualan) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    dpenjualan.nopnj = nopnj;
    dpenjualan.kode_m = kode_m;
    dpenjualan.jml_pnj = jml_pnj;
    dpenjualan.hpp = hpp;
    dpenjualan.h_jual = h_jual;
    await dpenjualan.save();
    res.json(dpenjualan);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.deletedPenjualan = async (req, res) => {
  try {
    const dpenjualan = await dPenjualan.findByPk(req.params.id);
    if (!dpenjualan) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    await dpenjualan.destroy();
    res.json({ msg: "SUCCESSFULL" }).status(204);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};
