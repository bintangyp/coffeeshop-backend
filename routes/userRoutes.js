const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const authenticateToken = require("../middlewares/authMiddleware.js");

router.get("/user", authenticateToken, userController.getAllUsers);
router.get("/user/:id", authenticateToken, userController.getUserById);
router.post("/user", authenticateToken, userController.createUser);
router.put("user/:id", authenticateToken, userController.updateUser);
router.delete("user/:id", authenticateToken, userController.deleteUser);

module.exports = router;
