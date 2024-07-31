const { exec } = require("child_process");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const BACKUP_PATH = path.join("./", "backup.sql"); // Path untuk menyimpan file backup
// Fungsi untuk membuat backup
const backupDatabase = () => {
  const command = `${process.env.MYSQLDUMP_PATH} -u ${process.env.DB_USER} -p${process.env.DB_PASSWORD} ${process.env.DB_NAME} > ${BACKUP_PATH}`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return;
    }
    console.log("Database backup created successfully:", BACKUP_PATH);
  });
};

// Panggil fungsi untuk membuat backup
backupDatabase();
