const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoutes.js");
const allroutes = require("./routes/routes.js");

const app = express();
const port = 3000;

// Konfigurasi body-parser untuk mengambil data dari body permintaan
app.use(bodyParser.json());

// Hubungkan semua rute yang terdefinisi
app.use(authRoutes);
app.use(allroutes);

// Sinkronisasi model dengan database
sequelize
  .sync()
  .then(() => {
    console.log("Models synchronized with database");
  })
  .catch((err) => {
    console.error("Unable to synchronize models:", err);
  });

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});
