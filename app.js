const express = require("express");
const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoutes.js");
const allroutes = require("./routes/routes.js");
const FileUpload = require("express-fileupload");

const app = express();
const port = 3000;

app.use(express.json());
app.use(FileUpload());
app.use(express.static("uploads"));

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
