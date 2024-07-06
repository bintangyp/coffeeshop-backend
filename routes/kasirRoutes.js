const express = require("express");
const router = express.Router();
const kasirController = require("../controllers/kasirController.js");
const authenticateToken = require("../middlewares/authMiddleware.js");

router.get("/kasir", authenticateToken, kasirController.getAllKasir);
router.get("/kasir/:id", authenticateToken, kasirController.getKasirById);
router.post("/kasir", kasirController.createKasir);
router.put("kasir/:id", authenticateToken, kasirController.updateKasir);
router.delete("kasir/:id", authenticateToken, kasirController.deleteUser);

module.exports = router;
