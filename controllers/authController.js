// controllers/authController.js
const jwt = require("jsonwebtoken");
const Kasir = require("../models/Users");
const Blacklist = require("../models/Blacklist");
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

exports.logout = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verifikasi token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Simpan token di blacklist dengan waktu kedaluwarsa yang sama
    await Blacklist.create({
      token,
      expiresAt: new Date(decoded.exp * 1000), // Exp adalah dalam detik Unix
    });

    res.json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Middleware untuk mengecek apakah token ada di blacklist
exports.checkBlacklist = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  const blacklistedToken = await Blacklist.findOne({ where: { token } });
  if (blacklistedToken) {
    return res.status(401).json({ message: "Token has been logged out" });
  }

  next();
};
