const Transaksi = require("../models/Transaksi");

exports.getAllTransaksi = async (req, res) => {
  try {
    const datas = await Transaksi.findAll({
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

exports.getTransaksiById = async (req, res) => {
  try {
    const transaksi = await Transaksi.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: { id_dpnj: req.params.id },
    });
    if (!transaksi) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    res.json({ data: transaksi });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.createTransaksi = async (req, res) => {
  const { notrans, jenis_trans, no_ref, masuk, keluar, waktu_trans, u_id } =
    req.body;

  try {
    const transaksi = await Transaksi.create({
      notrans,
      jenis_trans,
      no_ref,
      masuk,
      keluar,
      waktu_trans,
      u_id,
    });
    res.status(201).json(transaksi);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.updateTransaksi = async (req, res) => {
  try {
    const { jenis_trans, no_ref, masuk, keluar, waktu_trans, u_id } = req.body;

    const transaksi = await Transaksi.findByPk(req.params.id);
    if (!transaksi) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    transaksi.jenis_trans = jenis_trans;
    transaksi.no_ref = no_ref;
    transaksi.masuk = masuk;
    transaksi.keluar = keluar;
    transaksi.waktu_trans = waktu_trans;
    transaksi.u_id = u_id;
    await transaksi.save();
    res.json(transaksi);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.deleteTransaksi = async (req, res) => {
  try {
    const transaksi = await Transaksi.findByPk(req.params.id);
    if (!transaksi) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    await transaksi.destroy();
    res.json({ msg: "SUCCESSFULL" }).status(204);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};
