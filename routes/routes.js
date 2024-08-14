const express = require("express");
const router = express.Router();
// const upload = require("../config/samulter.js");
const hutangController = require("../controllers/HutangController");
const allControllers = require("../controllers/allControllers");
const authController = require("../controllers/authController.js");
const menuController = require("../controllers/menuController");
const pembelianController = require("../controllers/pembelianController");
const dpembelianController = require("../controllers/dpembelianController");
const bpokokController = require("../controllers/bpokokController");
const dmenuController = require("../controllers/dmenuController");
const dpenjualanController = require("../controllers/dpenjualanController.js");
const userController = require("../controllers/userController.js");
const suplayerController = require("../controllers/suplayerController.js");
const transaksiController = require("../controllers/transaksiController.js");

const authenticateToken = require("../middlewares/authMiddleware");

// routing user
router.get("/user", authenticateToken, userController.getAllUsers);
router.get("/user/:id", authenticateToken, userController.getUserById);
router.post("/user", authenticateToken, userController.createUser);
router.put("user/:id", authenticateToken, userController.updateUser);
router.delete("user/:id", authenticateToken, userController.deleteUser);

// routing Suplayer
router.get(
  "/suplayer",
  authController.checkBlacklist,
  authenticateToken,
  suplayerController.getAllSuplayers
);
router.get(
  "/suplayer/:id",
  authenticateToken,
  suplayerController.getOneSuplayer
);
router.post("/suplayer", authenticateToken, suplayerController.createSuplayer);

// routing Menu
router.get("/menu", authenticateToken, menuController.getAllMenus);
router.get("/menu/:id", authenticateToken, menuController.getOneMenu);
router.post("/menu", authenticateToken, menuController.createMenu);
router.delete("/menu", authenticateToken, menuController.deleteMenu);

// routing Pembelian
router.get(
  "/pembelian",
  authenticateToken,
  pembelianController.getAllPembelians
);
router.get(
  "/pembelian/:id",
  authenticateToken,
  pembelianController.getOnePembelian
);
router.post(
  "/pembelian",
  authenticateToken,
  pembelianController.createPembelian
);
router.delete(
  "/pembelian",
  authenticateToken,
  pembelianController.deletePembelian
);

// routing detail Pembelian
router.get(
  "/dpembelian",
  authenticateToken,
  dpembelianController.getAlldPembelian
);
router.get(
  "/dpembelian/:id",
  authenticateToken,
  dpembelianController.getdPembelianById
);
router.post(
  "/dpembelian",
  authenticateToken,
  dpembelianController.createdPembelian
);
router.put(
  "/dpembelian/:id",
  authenticateToken,
  dpembelianController.updatedPembelian
);
router.delete(
  "/dpembelian/:id",
  authenticateToken,
  dpembelianController.deletedPembelian
);

// routing bahan pokok
router.get("/bpokok", authenticateToken, bpokokController.getAllbPokok);
router.get("/bpokok/:id", authenticateToken, bpokokController.getbPokokById);
router.post("/bpokok", authenticateToken, bpokokController.createbPokok);
router.put("/bpokok/:id", authenticateToken, bpokokController.updatebPokok);
router.delete("/bpokok/:id", authenticateToken, bpokokController.deletebPokok);

// routing detail menu
router.get("/dmenu", authenticateToken, dmenuController.getAlldMenu);
router.get("/dmenu/:id", authenticateToken, dmenuController.getdMenuById);
router.post("/dmenu", authenticateToken, dmenuController.createdMenu);
router.put("/dmenu/:id", authenticateToken, dmenuController.updatedMenu);
router.delete("/dmenu/:id", authenticateToken, dmenuController.deletedMenu);

// routing dpenjualan
router.get(
  "/dpenjualan",
  authenticateToken,
  dpenjualanController.getAlldPenjualan
);
router.get(
  "/dpenjualan/:id",
  authenticateToken,
  dpenjualanController.getdPenjualanById
);
router.post(
  "/dpenjualan",
  authenticateToken,
  dpenjualanController.createdPenjualan
);
router.put(
  "/dpenjualan/:id",
  authenticateToken,
  dpenjualanController.updatedPenjulalan
);
router.delete(
  "/dpenjualan/:id",
  authenticateToken,
  dpenjualanController.deletedPenjualan
);

// routing transaksi
router.get(
  "/transaksi",
  authenticateToken,
  transaksiController.getAllTransaksi
);
router.get(
  "/transaksi/:id",
  authenticateToken,
  transaksiController.getTransaksiById
);
router.post(
  "/transaksi",
  authenticateToken,
  transaksiController.createTransaksi
);
router.put(
  "/transaksi/:id",
  authenticateToken,
  transaksiController.updateTransaksi
);
router.delete(
  "/transaksi/:id",
  authenticateToken,
  transaksiController.deleteTransaksi
);

module.exports = router;
