const Hutang = require("../models/Hutang");

exports.getAllHutang = async (req, res) => {
  try {
    const datas = await Hutang.findAll({
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

exports.getHutangById = async (req, res) => {
  try {
    const hutang = await Hutang.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: { id_dpnj: req.params.id },
    });
    if (!hutang) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    res.json({ data: hutang });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.createHutang = async (req, res) => {
  const { nohutang, nopmb, kode_s, waktu_tempo, status, total_hutang, sisa } =
    req.body;

  try {
    const hutang = await Hutang.create({
      nohutang,
      nopmb,
      kode_s,
      waktu_tempo,
      status,
      total_hutang,
      sisa,
    });
    res.status(201).json(hutang);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.updateHutang = async (req, res) => {
  try {
    const { nopmb, kode_s, waktu_tempo, status, total_hutang, sisa } = req.body;

    const hutang = await Hutang.findByPk(req.params.id);
    if (!hutang) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    hutang.nopmb = nopmb;
    hutang.kode_s = kode_s;
    hutang.waktu_tempo = waktu_tempo;
    hutang.status = status;
    hutang.total_hutang = total_hutang;
    hutang.sisa = sisa;
    await hutang.save();
    res.json(hutang);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.deleteHutang = async (req, res) => {
  try {
    const hutang = await Hutang.findByPk(req.params.id);
    if (!hutang) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    await hutang.destroy();
    res.json({ msg: "SUCCESSFULL" }).status(204);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};
