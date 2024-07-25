const express = require("express");
const router = express.Router();
const suplayerController = require("../controllers/suplayerController.js");
const authenticateToken = require("../middlewares/authMiddleware.js");

router.get("/suplayer", authenticateToken, suplayerController.getAllSuplayers);
router.get(
  "/suplayer/:id",
  authenticateToken,
  suplayerController.getOneSuplayer
);
router.post("/suplayer", authenticateToken, suplayerController.createSuplayer);

module.exports = router;
