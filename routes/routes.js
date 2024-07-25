const express = require("express");
const router = express.Router();
const hutangController = require("../controllers/HutangController");
const allControllers = require("../controllers/allControllers");
const menuController = require("../controllers/menuController");
const authenticateToken = require("../middlewares/authMiddleware");

// routing Menu
router.get("/menu", authenticateToken, menuController.getAllMenus);
router.get("/menu/:id", authenticateToken, menuController.getOneMenu);
router.post("/menu", authenticateToken, menuController.createMenu);

module.exports = router;
