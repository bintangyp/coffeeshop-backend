const dMenu = require("../models/DetailMenu");

exports.getAlldMenu = async (req, res) => {
  try {
    const datas = await dMenu.findAll({
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

exports.getdMenuById = async (req, res) => {
  try {
    const dmenu = await dMenu.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: { kode_dp: req.params.id },
    });
    if (!dmenu) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    res.json({ data: dmenu });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.createdMenu = async (req, res) => {
  const { kode_dm, kode_m, kode_b, jml_pakai } = req.body;

  try {
    const dmenu = await dMenu.create({
      kode_dm,
      kode_m,
      kode_b,
      jml_pakai,
    });
    res.status(201).json(dmenu);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.updatedMenu = async (req, res) => {
  try {
    const { kode_dm, kode_m, kode_b, jml_pakai } = req.body;

    const dmenu = await dMenu.findByPk(req.params.id);
    if (!dmenu) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }

    dmenu.kode_dm = kode_dm;
    dmenu.kode_m = kode_m;
    dmenu.kode_b = kode_b;
    dmenu.jml_pakai = jml_pakai;
    await dmenu.save();
    res.json(dmenu);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};

exports.deletedMenu = async (req, res) => {
  try {
    const dmenu = await dMenu.findByPk(req.params.id);
    if (!dmenu) {
      return res.status(404).json({ error: "NOT_FOUND" });
    }
    await dmenu.destroy();
    res.json({ msg: "SUCCESSFULL" }).status(204);
  } catch (err) {
    res.status(500).json({ error: err.errors[0].message });
  }
};
