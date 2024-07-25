const express = require("express");
const router = express.Router();
const hutangController = require("../controllers/HutangController");
const allControllers = require("../controllers/allControllers");
const menuController = require("../controllers/menuController");
const pembelianController = require("../controllers/pembelianController");
const authenticateToken = require("../middlewares/authMiddleware");

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

module.exports = router;
