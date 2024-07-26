const Pesanan = require("../models/Pesanan");

exports.getAllPesanan = async (req, res) => {
  try {
    const datas = await Pesanan.findAll({
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

exports.getPesananById = async (req, res) => {
  try {
    const pesanan = await Pesanan.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: { nopsn: req.params.id },
    });
    if (!pesanan) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    res.json({ data: pesanan });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.createPesanan = async (req, res) => {
  const { nopsn, n_pemesan, waktu_psn, status_psn, total_psn, id_u } = req.body;

  try {
    const pesanan = await Pesanan.create({
      nopsn,
      n_pemesan,
      waktu_psn,
      status_psn,
      total_psn,
      id_u,
    });
    res.status(201).json(pesanan);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.updatePesanan = async (req, res) => {
  try {
    const { n_pemesan, waktu_psn, status_psn, total_psn, id_u } = req.body;
    const pesanan = await Pesanan.findByPk(req.params.id);
    if (!pesanan) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    pesanan.n_pemesan = n_pemesan;
    pesanan.waktu_psn = waktu_psn;
    pesanan.status_psn = status_psn;
    pesanan.total_psn = total_psn;
    pesanan.id_u = id_u;
    await pesanan.save();
    res.json(pesanan);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.deletePesanan = async (req, res) => {
  try {
    const pesanan = await Pesanan.findByPk(req.params.id);
    if (!pesanan) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    await pesanan.destroy();
    res.json({ msg: "SUCCESSFULL" }).status(204);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};
