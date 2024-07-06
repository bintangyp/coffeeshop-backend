const express = require("express");
const router = express.Router();
const kasirController = require("../controllers/kasirController.js");
const authenticateToken = require("../middlewares/authMiddleware.js");

router.get("/kasir", authenticateToken, kasirController.getAllKasir);
router.get("/kasir/:id", authenticateToken, kasirController.getKasirById);
router.post("/kasir", authenticateToken, kasirController.createKasir);
router.put("kasir/:id", authenticateToken, kasirController.updateKasir);

module.exports = router;
