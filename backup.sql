-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: coffeeshop
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bahan_pokoks`
--

DROP TABLE IF EXISTS `bahan_pokoks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bahan_pokoks` (
  `kode_b` varchar(10) NOT NULL,
  `nama_b` varchar(50) NOT NULL,
  `satuan` varchar(20) NOT NULL,
  `h_pokok` int(11) NOT NULL,
  `stok` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`kode_b`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bahan_pokoks`
--

LOCK TABLES `bahan_pokoks` WRITE;
/*!40000 ALTER TABLE `bahan_pokoks` DISABLE KEYS */;
INSERT INTO `bahan_pokoks` VALUES ('B0001','biji kopi','gram',500,5000,'2024-07-26 04:03:57','2024-07-26 04:03:57'),('B0002','susu','ml',100,10000,'2024-07-26 04:06:01','2024-07-26 04:06:01');
/*!40000 ALTER TABLE `bahan_pokoks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detail_menus`
--

DROP TABLE IF EXISTS `detail_menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detail_menus` (
  `kode_bm` varchar(10) NOT NULL,
  `kode_m` varchar(10) NOT NULL,
  `kode_b` varchar(10) NOT NULL,
  `jml_pakai` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`kode_bm`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detail_menus`
--

LOCK TABLES `detail_menus` WRITE;
/*!40000 ALTER TABLE `detail_menus` DISABLE KEYS */;
/*!40000 ALTER TABLE `detail_menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detail_pembelians`
--

DROP TABLE IF EXISTS `detail_pembelians`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detail_pembelians` (
  `kode_dp` varchar(10) NOT NULL,
  `nofaktur` varchar(50) NOT NULL,
  `kode_b` varchar(10) NOT NULL,
  `jml_beli` int(11) NOT NULL,
  `h_beli` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`kode_dp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detail_pembelians`
--

LOCK TABLES `detail_pembelians` WRITE;
/*!40000 ALTER TABLE `detail_pembelians` DISABLE KEYS */;
INSERT INTO `detail_pembelians` VALUES ('DP0001','SP0000001','B0001',10,24000,'2024-07-26 03:47:47','2024-07-26 03:47:47');
/*!40000 ALTER TABLE `detail_pembelians` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detail_pesanans`
--

DROP TABLE IF EXISTS `detail_pesanans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detail_pesanans` (
  `id_dpsn` varchar(10) NOT NULL,
  `nopsn` varchar(10) NOT NULL,
  `kode_m` varchar(20) NOT NULL,
  `jml_psn` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_dpsn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detail_pesanans`
--

LOCK TABLES `detail_pesanans` WRITE;
/*!40000 ALTER TABLE `detail_pesanans` DISABLE KEYS */;
INSERT INTO `detail_pesanans` VALUES ('DP000001','P00001','M0001',1,'2024-07-26 12:59:53','2024-07-26 12:59:53'),('DP000002','P00001','M0002',2,'2024-07-26 13:00:07','2024-07-26 13:00:07');
/*!40000 ALTER TABLE `detail_pesanans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hutangs`
--

DROP TABLE IF EXISTS `hutangs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hutangs` (
  `kode_h` varchar(50) NOT NULL,
  `nofaktur` varchar(50) NOT NULL,
  `kode_s` varchar(20) NOT NULL,
  `tgl_tempo` datetime NOT NULL,
  `status` varchar(50) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`kode_h`),
  UNIQUE KEY `kode_s` (`kode_s`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hutangs`
--

LOCK TABLES `hutangs` WRITE;
/*!40000 ALTER TABLE `hutangs` DISABLE KEYS */;
/*!40000 ALTER TABLE `hutangs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menus`
--

DROP TABLE IF EXISTS `menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menus` (
  `kode_m` varchar(10) NOT NULL,
  `nama_m` varchar(100) NOT NULL,
  `h_jual` int(11) NOT NULL,
  `h_pokok` int(11) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`kode_m`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menus`
--

LOCK TABLES `menus` WRITE;
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;
INSERT INTO `menus` VALUES ('M0001','Cappuccino',100000,8000,'http://localhost:3000/1722439247674-americano.webp','2024-07-31 15:20:47','2024-07-31 15:20:47'),('M0002','Cappuccino',100000,8000,'http://localhost:3000/1722439388733-50de339f-7e20-4738-b9a4-a2ba49991add.webp','2024-07-31 15:23:08','2024-07-31 15:23:08'),('M0003','Cappuccino',100000,8000,'http://localhost:3000/1722439470381-thumb-1920-571535.webp','2024-07-31 15:24:30','2024-07-31 15:24:30'),('M0004','Cappuccino',100000,8000,'http://localhost:3000/1722439607448-ai-generated-8770644_1280.webp','2024-07-31 15:26:47','2024-07-31 15:26:47');
/*!40000 ALTER TABLE `menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pembelians`
--

DROP TABLE IF EXISTS `pembelians`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pembelians` (
  `nofaktur` varchar(50) NOT NULL,
  `kode_s` varchar(20) NOT NULL,
  `tgl_pmb` datetime NOT NULL,
  `tgl_tempo` datetime NOT NULL,
  `status_pmb` enum('cash','hutang') NOT NULL,
  `total_pmb` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`nofaktur`),
  UNIQUE KEY `nofaktur` (`nofaktur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pembelians`
--

LOCK TABLES `pembelians` WRITE;
/*!40000 ALTER TABLE `pembelians` DISABLE KEYS */;
INSERT INTO `pembelians` VALUES ('SP0000001','S0001','2024-06-30 17:00:00','2024-07-31 17:00:00','hutang',12000000,'2024-07-25 13:51:30','2024-07-25 13:51:30');
/*!40000 ALTER TABLE `pembelians` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pengeluarans`
--

DROP TABLE IF EXISTS `pengeluarans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pengeluarans` (
  `nopng` varchar(10) NOT NULL,
  `jenis_png` varchar(20) NOT NULL,
  `ket_png` varchar(255) NOT NULL,
  `biaya` int(11) NOT NULL,
  `kode_k` varchar(10) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`nopng`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pengeluarans`
--

LOCK TABLES `pengeluarans` WRITE;
/*!40000 ALTER TABLE `pengeluarans` DISABLE KEYS */;
/*!40000 ALTER TABLE `pengeluarans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `penjualans`
--

DROP TABLE IF EXISTS `penjualans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `penjualans` (
  `nopnj` varchar(10) NOT NULL,
  `n_pembeli` varchar(100) NOT NULL,
  `waktu_pnj` datetime NOT NULL,
  `tgl_psn` datetime NOT NULL,
  `total_pnj` int(11) NOT NULL,
  `total_hpp` int(11) NOT NULL,
  `total_laba` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`nopnj`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `penjualans`
--

LOCK TABLES `penjualans` WRITE;
/*!40000 ALTER TABLE `penjualans` DISABLE KEYS */;
/*!40000 ALTER TABLE `penjualans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pesanans`
--

DROP TABLE IF EXISTS `pesanans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pesanans` (
  `nopsn` varchar(10) NOT NULL,
  `n_pemesan` varchar(100) NOT NULL,
  `waktu_psn` datetime NOT NULL,
  `status_psn` varchar(20) NOT NULL,
  `total_psn` int(11) NOT NULL,
  `id_u` varchar(10) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`nopsn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pesanans`
--

LOCK TABLES `pesanans` WRITE;
/*!40000 ALTER TABLE `pesanans` DISABLE KEYS */;
INSERT INTO `pesanans` VALUES ('P00001','indra','2024-07-26 09:50:00','sedang diproses',56000,'K0001','2024-07-26 12:39:16','2024-07-26 12:39:16'),('P00002','annisa','2024-07-26 10:00:00','sedang diproses',45000,'K0001','2024-07-26 12:40:09','2024-07-26 12:40:09');
/*!40000 ALTER TABLE `pesanans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suplayers`
--

DROP TABLE IF EXISTS `suplayers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `suplayers` (
  `kode_s` varchar(10) NOT NULL,
  `nama_s` varchar(50) NOT NULL,
  `alamat_s` varchar(255) NOT NULL,
  `telp_s` varchar(20) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`kode_s`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suplayers`
--

LOCK TABLES `suplayers` WRITE;
/*!40000 ALTER TABLE `suplayers` DISABLE KEYS */;
/*!40000 ALTER TABLE `suplayers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id_u` varchar(10) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `jabatan` varchar(255) NOT NULL,
  `alamat_u` varchar(255) NOT NULL,
  `telp_u` varchar(20) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_u`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('K0001','admin','$2b$10$eaeA7k1.uosYbJLjdNQtmuJnszvvI/fRy1oMAWZe6RG/POME7tn2O','superadmin','Main Office','-','2024-07-25 12:33:50','2024-07-25 12:33:50'),('K0002','kasir','$2b$10$W6jFIR/MoqsednYUPLPgQuHsrvTpv6XPOUMf1uicvIyLa.U8wUVWq','kasir','Main Office','-','2024-07-25 12:36:50','2024-07-25 12:36:50');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-31 22:47:21
