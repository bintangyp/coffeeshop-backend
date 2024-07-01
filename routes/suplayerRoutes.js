const express = require("express");
const router = express.Router();
const suplayerController = require("../controllers/suplayerController.js");

// Rute untuk mendapatkan semua pengguna
router.get("/suplayers", suplayerController.getAllSuplayers);

// Rute untuk menambah pengguna baru
router.post("/suplayer", suplayerController.createSuplayer);

module.exports = router;
