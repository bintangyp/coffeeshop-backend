// controllers/authController.js
const jwt = require("jsonwebtoken");
const Kasir = require("../models/Users");
const bcrypt = require("bcrypt");
require("dotenv").config();

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const kasir = await Kasir.findOne({ where: { username } });

    if (!kasir) {
      return res.status(401).json({ error: "NOTFOUND" });
    }

    const isMatch = await bcrypt.compare(password, kasir.password);

    if (!isMatch) {
      return res.status(401).json({ error: "WRONG_PASSWORD" });
    }

    // Generate a token
    const token = jwt.sign(
      { id: kasir.id_k, username: kasir.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
