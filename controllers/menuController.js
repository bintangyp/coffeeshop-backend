const Menu = require("../models/Menu");

exports.getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.findAll({
      attributes: {
        exclude: ["h_pokok", "createdAt", "updatedAt"],
      },
    });
    res.json({ data: menus });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createMenu = async (req, res) => {
  const { kode_m, nama_m, h_jual, h_pokok, gambar } = req.body;
  console.log(req);
  try {
    const newMenu = await Menu.create({
      kode_m,
      nama_m,
      h_jual,
      h_pokok,
      gambar,
    });
    res.status(201).json(newMenu);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.updateMenu = async (req, res) => {
  try {
    const { kode_m, nama_m, h_jual, h_pokok, gambar } = req.body;

    const menu = await Menu.findByPk(req.params.id);
    if (!menu) {
      return res.status(404).json({ error: "NOTFOUND" });
    }
    await menu.save();
    res.json(menu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOneMenu = async (req, res) => {
  try {
    const menu = await Menu.findOne({
      attributes: {
        exclude: ["h_pokok", "createdAt", "updatedAt"],
      },
      where: { kode_m: req.params.id },
    });
    if (!menu) {
      return res.status(404).json({ error: "Menu not found" });
    }
    res.json({ data: menu });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findByPk(req.params.id);
    if (!menu) {
      return res.status(404).json({ error: "NOTFOUND" });
    }
    await menu.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
