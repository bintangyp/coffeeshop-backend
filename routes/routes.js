const express = require("express");
const router = express.Router();
// const upload = require("../config/samulter.js");
const hutangController = require("../controllers/hutangController");
const authController = require("../controllers/authController.js");
const menuController = require("../controllers/menuController");
const pembelianController = require("../controllers/pembelianController");
const dpembelianController = require("../controllers/dpembelianController");
const bpokokController = require("../controllers/bpokokController");
const dmenuController = require("../controllers/dmenuController");
const penjualanController = require("../controllers/penjualanController.js");
const dpenjualanController = require("../controllers/dpenjualanController.js");
const userController = require("../controllers/userController.js");
const suplayerController = require("../controllers/suplayerController.js");
const transaksiController = require("../controllers/transaksiController.js");
const pengeluaranController = require("../controllers/pengeluaranController.js");

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
router.put("/menu/:id", authenticateToken, menuController.updateMenu);
router.delete("/menu/:id", authenticateToken, menuController.deleteMenu);

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

// routing pengeluaran
router.get(
  "/pengeluaran",
  authenticateToken,
  pengeluaranController.getAllPengeluaran
);
router.get(
  "/pengeluaran/:id",
  authenticateToken,
  pengeluaranController.getPengeluaranById
);
router.post(
  "/pengeluaran",
  authenticateToken,
  pengeluaranController.createPengeluaran
);
router.put(
  "/pengeluaran/:id",
  authenticateToken,
  pengeluaranController.updatePengeluaran
);
router.delete(
  "/pengeluaran/:id",
  authenticateToken,
  pengeluaranController.deletedPengeluaran
);

// routing penjualan
router.get(
  "/penjualan",
  authenticateToken,
  penjualanController.getAllPenjualan
);
router.get(
  "/penjualan/:id",
  authenticateToken,
  penjualanController.getPenjualanById
);
router.post(
  "/penjualan",
  authenticateToken,
  penjualanController.createPenjualan
);
router.put(
  "/penjualan/:id",
  authenticateToken,
  penjualanController.updatePenjualan
);
router.delete(
  "/penjualan/:id",
  authenticateToken,
  penjualanController.deletePenjualan
);

// routing detail penjualan
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
