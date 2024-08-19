const dPembelian = require("../models/DetailPembelian");

exports.getAlldPembelian = async (req, res) => {
  try {
    const datas = await dPembelian.findAll({
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

exports.getdPembelianById = async (req, res) => {
  try {
    const dpembelian = await dPembelian.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: { kode_dp: req.params.id },
    });
    if (!dpembelian) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    res.json({ data: dpembelian });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.createdPembelian = async (req, res) => {
  const { kode_dp, nopmb, kode_b, jml_beli, h_beli } = req.body;
  try {
    const dpembelian = await dPembelian.create({
      kode_dp,
      nopmb,
      kode_b,
      jml_beli,
      h_beli,
    });
    res.status(201).json(dpembelian);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.updatedPembelian = async (req, res) => {
  try {
    const { nopmb, kode_b, jml_beli, h_beli } = req.body;
    const dpembelian = await dPembelian.findByPk(req.params.id);
    if (!dpembelian) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    dpembelian.nopmb = nopmb;
    dpembelian.kode_b = kode_b;
    dpembelian.jml_beli = jml_beli;
    dpembelian.h_beli = h_beli;
    await dpembelian.save();
    res.json(dpembelian);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.deletedPembelian = async (req, res) => {
  try {
    const dpembelian = await dPembelian.findByPk(req.params.id);
    if (!dpembelian) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    await dpembelian.destroy();
    res.json({ msg: "SUCCESSFULL" }).status(204);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};
