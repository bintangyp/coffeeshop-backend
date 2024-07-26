const dPesanan = require("../models/DetailPesanan");

exports.getAlldPesanan = async (req, res) => {
  try {
    const datas = await dPesanan.findAll({
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

exports.getdPesananById = async (req, res) => {
  try {
    const dpesanan = await dPesanan.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: { id_dpsn: req.params.id },
    });
    if (!dpesanan) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    res.json({ data: dpesanan });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.createdPesanan = async (req, res) => {
  const { id_dpsn, nopsn, kode_m, jml_psn } = req.body;

  try {
    const dpesanan = await dPesanan.create({
      id_dpsn,
      nopsn,
      kode_m,
      jml_psn,
    });
    res.status(201).json(dpesanan);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.updatedPesanan = async (req, res) => {
  try {
    const { nopsn, kode_m, jml_psn } = req.body;

    const dpesanan = await dPesanan.findByPk(req.params.id);
    if (!dpesanan) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    dpesanan.nopsn = nopsn;
    dpesanan.kode_m = kode_m;
    dpesanan.jml_psn = jml_psn;
    await dpesanan.save();
    res.json(dpesanan);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.deletedPesanan = async (req, res) => {
  try {
    const dpesanan = await dPesanan.findByPk(req.params.id);
    if (!dpesanan) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    await dpesanan.destroy();
    res.json({ msg: "SUCCESSFULL" }).status(204);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};
