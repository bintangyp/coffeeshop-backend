const Menu = require("../models/Menu");
const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

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
  if (req.files === null) {
    req.status(400).json({ msg: "NO_FILE_UPLOADED" });
  }
  const { kode_m, nama_m, h_jual, h_pokok } = req.body;
  const file = req.files ? req.files.gambar : null;

  // cek extensi file
  const ext = path.extname(file.name);
  // console.log(path(file.name));
  const allowType = [".png", ".jpg", ".jpeg", ".webp"];
  if (!allowType.includes(ext.toLowerCase()))
    return res.status(422).json("INFALID_IMAGE");

  let filePath = null;

  const fileName = `${Date.now()}-${file.name
    .split(".")
    .slice(0, -1)
    .join(".")}.webp`;
  const outputFilePath = `uploads/${fileName}`;
  await sharp(file.data).webp().toFile(outputFilePath);
  filePath = outputFilePath;
  const url = `${req.protocol}://${req.get("host")}/${fileName}`;

  try {
    const newMenu = await Menu.create({
      kode_m,
      nama_m,
      h_jual,
      h_pokok,
      gambar: url,
    });
    res.status(201).json(newMenu);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.errors[0].message });
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
    fs.unlinkSync(menu.gambar);
    if (!menu) {
      return res.status(404).json({ error: "NOTFOUND" });
    }
    await menu.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
