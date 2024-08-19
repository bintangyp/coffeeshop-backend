const StokOpname = require("../models/DetailPenjualan");

exports.getAllOpname = async (req, res) => {
  try {
    const datas = await StokOpname.findAll({
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

exports.getOpnameById = async (req, res) => {
  try {
    const opname = await StokOpname.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: { id_dpnj: req.params.id },
    });
    if (!opname) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    res.json({ data: opname });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.createOpname = async (req, res) => {
  const { id_dpnj, nopnj, kode_m, jml_pnj, hpp, h_jual } = req.body;

  try {
    const opname = await StokOpname.create({
      id_dpnj,
      nopnj,
      kode_m,
      jml_pnj,
      hpp,
      h_jual,
    });
    res.status(201).json(opname);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.updateOpname = async (req, res) => {
  try {
    const { nopnj, kode_m, jml_pnj, hpp, h_jual } = req.body;

    const opname = await StokOpname.findByPk(req.params.id);
    if (!opname) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    opname.nopnj = nopnj;
    opname.kode_m = kode_m;
    opname.jml_pnj = jml_pnj;
    opname.hpp = hpp;
    opname.h_jual = h_jual;
    await opname.save();
    res.json(opname);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.deletedOpname = async (req, res) => {
  try {
    const opname = await StokOpname.findByPk(req.params.id);
    if (!opname) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    await opname.destroy();
    res.json({ msg: "SUCCESSFULL" }).status(204);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};
