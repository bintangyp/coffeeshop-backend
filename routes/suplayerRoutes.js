const express = require("express");
const router = express.Router();
const suplayerController = require("../controllers/suplayerController.js");

router.get("/suplayer", suplayerController.getAllSuplayers);
router.get("/suplayer/:id", suplayerController.getOneSuplayer);
router.post("/suplayer", suplayerController.createSuplayer);

module.exports = router;
