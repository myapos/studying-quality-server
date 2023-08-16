-- MySQL dump 10.13  Distrib 8.0.34, for Linux (x86_64)
--
-- Host: localhost    Database: quality
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Available_checks`
--

DROP TABLE IF EXISTS `Available_checks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Available_checks` (
  `available_check_id` int NOT NULL AUTO_INCREMENT,
  `check_description` varchar(200) DEFAULT NULL,
  `system_part_id` int NOT NULL,
  PRIMARY KEY (`available_check_id`),
  KEY `system_part_id` (`system_part_id`),
  CONSTRAINT `system_part_id` FOREIGN KEY (`system_part_id`) REFERENCES `System_parts` (`system_part_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Available_checks`
--

LOCK TABLES `Available_checks` WRITE;
/*!40000 ALTER TABLE `Available_checks` DISABLE KEYS */;
INSERT INTO `Available_checks` VALUES (1,'Έλεγχοι δικτύου κατά την προετοιμασία των ελαίων',4),(2,'Έλεγχοι κατά την προμήθεια και παραλαβή πρώτων υλών',3),(3,'Έλεγχοι δικτύου απορροής υπολειμμάτων',7),(4,'Έλεγχος προμηθευτή υλικών συσκευασίας',8),(5,'Έλεγχοι δικτύου κατά την προετοιμασία των ελαίων',5),(6,'Συντήρηση του εξοπλισμού σε 3μηνιαία βάση και έλεγχος ανά μήνα',4),(7,'Έλεγχος εξοπλισμού',10),(8,'Έλεγχος προμηθευτή υλικών συσκευασίας',12),(9,'Έλεγχοι κατά την προμήθεια και παραλαβή πρώτων υλών',2),(10,'Έλεγχος εξοπλισμού',11),(11,'Τήρηση αρχείων προσωπικής υγιεινής και ασφάλειας προσωπικού',6);
/*!40000 ALTER TABLE `Available_checks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Detection`
--

DROP TABLE IF EXISTS `Detection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Detection` (
  `id` int NOT NULL AUTO_INCREMENT,
  `detection` varchar(200) DEFAULT NULL,
  `possibility_detection` varchar(200) DEFAULT NULL,
  `score` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Detection`
--

LOCK TABLES `Detection` WRITE;
/*!40000 ALTER TABLE `Detection` DISABLE KEYS */;
INSERT INTO `Detection` VALUES (1,'Σχεδόν βέβαιη','Οι μηχανισμοί ελέγχου είναι σχεδόν βέβαιο ότι θα εντοπίσουν τα πιθανά αίτια και τον επικείμενο τρόπο αστοχίας',1),(2,'Πολύ υψηλή','Οι μηχανισμοί ελέγχου έχουν πολύ υψηλή πιθανότητα να εντοπίσουν τα πιθανά αίτια και τον επικείμενο τρόπο αστοχίας',2),(3,'Υψηλή','Οι μηχανισμοί ελέγχου έχουν υψηλή πιθανότητα να εντοπίσουν τα πιθανά αίτια και τον επικείμενο τρόπο αστοχίας',3),(4,'Σχετικά υψηλή','Οι μηχανισμοί ελέγχου έχουν σχετικά υψηλή πιθανότητα να εντοπίσουν τα πιθανά αίτια και τον επικείμενο τρόπο αστοχίας',4),(5,'Μέτρια','Οι μηχανισμοί ελέγχου έχουν μετρημένες πιθανότητες να εντοπίσουν τα πιθανά αίτια και τον επικείμενο τρόπο αστοχίας',5),(6,'Σχετικά χαμηλή\r\n','Οι μηχανισμοί ελέγχου έχουν σχετικά μειωμένη πιθανότητα να εντοπίσουν τα πιθανά αίτια και τον επικείμενο τρόπο αστοχίας',6),(7,'Χαμηλή','Οι μηχανισμοί ελέγχου έχουν μειωμένη πιθανότητα να εντοπίσουν τα πιθανά αίτια και τον επικείμενο τρόπο αστοχίας',7),(8,'Πολύ χαμηλή\r\n','Οι μηχανισμοί ελέγχου έχουν αρκετά μειωμένη πιθανότητα να εντοπίσουν τα πιθανά αίτια και τον επικείμενο τρόπο αστοχίας',8),(9,'Ελάχιστη','Οι μηχανισμοί ελέγχου έχουν απειροελάχιστες πιθανότητας να εντοπίσουν τα πιθανά αίτια και τον επικείμενο τρόπο αστοχίας\r\n',9),(10,'Σχεδόν απίθανο','Δεν υπάρχουν διαθέσιμοι μηχανισμοί ελέγχου ώστε να εντοπίσουν τα πιθανά αίτια και τον επικείμενο τρόπο αστοχίας',10);
/*!40000 ALTER TABLE `Detection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FMEA_Scores`
--

DROP TABLE IF EXISTS `FMEA_Scores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FMEA_Scores` (
  `scores_id` int NOT NULL AUTO_INCREMENT,
  `procedure_step` varchar(200) DEFAULT NULL,
  `system_part_id` int DEFAULT NULL,
  `possible_failure_id` int DEFAULT NULL,
  `possible_failure_score` int DEFAULT NULL,
  `possible_cause_id` int DEFAULT NULL,
  `possible_causes_score` int DEFAULT NULL,
  `possible_effect_id` int DEFAULT NULL,
  `possible_effects_score` int DEFAULT NULL,
  `available_check_id` int DEFAULT NULL,
  `check_score` int DEFAULT NULL,
  `RPN` int DEFAULT NULL,
  PRIMARY KEY (`scores_id`),
  KEY `FK` (`procedure_step`,`system_part_id`,`possible_failure_id`,`possible_cause_id`,`possible_effect_id`,`available_check_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FMEA_Scores`
--

LOCK TABLES `FMEA_Scores` WRITE;
/*!40000 ALTER TABLE `FMEA_Scores` DISABLE KEYS */;
/*!40000 ALTER TABLE `FMEA_Scores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Occurence`
--

DROP TABLE IF EXISTS `Occurence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Occurence` (
  `id` int NOT NULL AUTO_INCREMENT,
  `possibility` varchar(200) DEFAULT NULL,
  `possibility_explanation` varchar(200) DEFAULT NULL,
  `score` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Occurence`
--

LOCK TABLES `Occurence` WRITE;
/*!40000 ALTER TABLE `Occurence` DISABLE KEYS */;
INSERT INTO `Occurence` VALUES (1,'Απειροελάχιστη','Επί της συγκεκριμένης διαδικασίας δεν έχουν παρατηρηθεί αποτυχίες. Μια αστοχία θεωρείται απίθανη',1),(2,'Ελάχιστη','Επί της συγκεκριμένης διαδικασίας μόνο περιστασιακα έχουν παρατηρηθεί αστοχίες ',2),(3,'Πολύ χαμηλή','Μεμονωμένα γεγονότα αποτυχιών σχετίζονται με παρόμοια γεγονότα',3),(4,'Χαμηλή','Επί της συγκεκριμένης διαδικασίας αρκετές αποτυχίες έχουν παρατηρηθεί αλλά όχι σε υψηλά ποσοστά',4),(5,'Μέτρια','Επί της συγκεκριμένης διαδικασίας, αρκετές αστοχίες που παρατηρούνται σχετίζονται με αστοχίες προηγούμενων διαδικασιών με μέτρια ποσοστά εμφάνισης',5),(6,'Σχετικά υψηλή\r\n','Επί της συγκεκριμένης διαδικασίας , οι αστοχίες που παρατηρούνται σχετίζονται με αστοχίες προηγούμενων διαδικασιών με σχετικά συχνή πιθανότητα εμφάνισης',6),(7,'Υψηλή','Επί της συγκεκριμένης διαδικασίας οι αστοχίες που παρατηρούνται σχετίζονται με αστοχίες προηγούμενων διαδικασιών , με υψηλά ποσοστά εμφάνισης',7),(8,'Πολύ υψηλή','Επί της συγκεκριμένης διαδικασίας οι αστοχίες που παρατηρούνται σχετίζονται με αστοχίες προηγούμενων διαδικασιών με πολύ υψηλά ποσοστά εμφάνισης',8),(9,'Σχεδόν σίγουρο','Η παρατήρηση μιας αστοχίας είναι σχεδόν βέβαιη ',9),(10,'Σίγουρο','Η παρατήρηση μιας αστοχίας είναι βέβαιη',10);
/*!40000 ALTER TABLE `Occurence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Possible_causes`
--

DROP TABLE IF EXISTS `Possible_causes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Possible_causes` (
  `possible_cause_id` int NOT NULL AUTO_INCREMENT,
  `cause_description` varchar(200) DEFAULT NULL,
  `possible_failure_id` int DEFAULT NULL,
  PRIMARY KEY (`possible_cause_id`),
  KEY `FK` (`possible_failure_id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Possible_causes`
--

LOCK TABLES `Possible_causes` WRITE;
/*!40000 ALTER TABLE `Possible_causes` DISABLE KEYS */;
INSERT INTO `Possible_causes` VALUES (1,'Επιμόλυνση με βλαβερές ουσίες',1),(2,'Αλλοίωση προϊόντος',2),(3,'Μόλυνση περιβάλλοντος',3),(4,'Αλλοίωση προϊόντος',4),(5,'Επιμόλυνση με βλαβερές ουσίες',1),(6,'Αλλοίωση προϊόντος',6),(7,'Αλλοίωση συσκευασίας',7),(8,'Αλλοίωση προϊόντος',8),(9,'Επιμόλυνση με βλαβερές ουσίες',9),(10,'Αλλοίωση λόγω κακής συντήρησης',8),(11,'Επιμόλυνση με βλαβερές ουσίες',1),(12,'Επιμόλυνση με βλαβερές ουσίες',9),(57,'test 6',2),(58,'test',2),(59,'test 6',2);
/*!40000 ALTER TABLE `Possible_causes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Possible_effects`
--

DROP TABLE IF EXISTS `Possible_effects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Possible_effects` (
  `possible_effect_id` int NOT NULL AUTO_INCREMENT,
  `effect_description` varchar(200) DEFAULT NULL,
  `possible_failure_id` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`possible_effect_id`),
  KEY `FK` (`possible_failure_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Possible_effects`
--

LOCK TABLES `Possible_effects` WRITE;
/*!40000 ALTER TABLE `Possible_effects` DISABLE KEYS */;
INSERT INTO `Possible_effects` VALUES (1,'Ακατάλληλα ή ελλιπή φίλτρα και δίκτυα ροής προϊόντος','1'),(2,'Ελλιπείς προδιαγραφές ασφαλείς παραλαβής πρώτων υλών','2'),(3,'Έλλειψη μελετών και μέσων προστασίας περιβάλλοντος','3'),(4,'Ακατάλληλα μέσα αποθήκευσης και μεταφοράς','4'),(5,'Ακατάλληλα λιπαντικά ή άλλες ουσίες εξευγενισμού','1'),(6,'Ελλιπής συντήρηση εξοπλισμού','6'),(7,'Ακατάλληλα μέσα αποθήκευσης και μεταφοράς','7'),(8,'Ακατάλληλα μέσα αποθήκευσης και μεταφοράς','8'),(9,'Έλλειψη μέτρων ασφαλείας υψηλές μέγιστες θερμοκρασίες στους χώρους τυποποίησης και συσκευασίας','9'),(10,'Ανεκπαίδευτο προσωπικό έλλειψη μέτρων ασφαλείας','1'),(11,'Ανεκπαίδευτο προσωπικό έλλειψη μέτρων ασφαλείας','9');
/*!40000 ALTER TABLE `Possible_effects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Possible_failures`
--

DROP TABLE IF EXISTS `Possible_failures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Possible_failures` (
  `possible_failure_id` int NOT NULL AUTO_INCREMENT,
  `failure_description` varchar(200) DEFAULT NULL,
  `system_part_id` int DEFAULT NULL,
  PRIMARY KEY (`possible_failure_id`),
  KEY `FK` (`system_part_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Possible_failures`
--

LOCK TABLES `Possible_failures` WRITE;
/*!40000 ALTER TABLE `Possible_failures` DISABLE KEYS */;
INSERT INTO `Possible_failures` VALUES (2,'Παραλαβή αλλοιωμένων πρώτων υλών',3),(3,'Διοχέτευση στο περιβάλλον βλαβερών ουσιών',7),(4,'Μετακόμιση μολυσματικών ουσιών κατά την συσκευασία',10),(6,'Βλάβη μηχανισμών εξαερισμού και υπαρχόντων θερμοστατών και θερμομέτρων',4),(7,'Αλλοιωμένα υλικά συσκευασίας',10),(8,'Μετακόμιση μολυσματικών ουσιών κατά την αποθήκευση ή διανομή',12),(9,'Μολυσματική επαφή προσωπικού και χειριστών μηχανημάτων με το σώμα του προϊόντος',2),(10,'Μετακόμιση μολυσματικών ουσιών κατά την αποθήκευση ή διανομή',11),(11,'Διαρροές και εισροές υγρών λιπαντικών και ξένων σωματιδίων στο σώμα του προϊόντος κατά την διοχέτευση του στα μηχανήματα της παραγωγικής διαδικασίας',6);
/*!40000 ALTER TABLE `Possible_failures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Severity`
--

DROP TABLE IF EXISTS `Severity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Severity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `severity` varchar(200) DEFAULT NULL,
  `criteria` varchar(200) DEFAULT NULL,
  `significance` varchar(200) DEFAULT NULL,
  `estimation_score` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Severity`
--

LOCK TABLES `Severity` WRITE;
/*!40000 ALTER TABLE `Severity` DISABLE KEYS */;
INSERT INTO `Severity` VALUES (1,'Μηδενικό','-','Καμία',1),(2,'Απειροελάχιστο','Ελάχιστη Επίδραση στην διαδικασία','Τμήματα του προϊόντος ίσως πρέπει να επαναμελετηθουν. Το ελάττωμα δεν γίνεται αντιληπτό από τον μέσο πελάτη. Ελαττώματα μόνο αισθητικά',2),(3,'Ελάχιστο','Ελάχιστη επίδραση στην διαδικασία','Τμήματα του προϊόντος ίσως πρέπει να επαναμελετηθούν. Το ελάττωμα γίνεται ανεπαίσθητα αντιληπτό από τον πελάτη. 0,25 πιθανότητα επιστροφών. Ελαττώματα αισθητικά συνήθως',3),(4,'Πολύ Μικρό','Ελάχιστη επίδραση στην διαδικασία','Το προϊόν εν γένει ίσως χρειαστεί να επανελεγχθεί. Το ελάττωμα γίνεται αντιληπτό από τον μέσο καταναλωτή , το οποίο παρουσιάζει κάποια υποβάθμιση στην λειτουργικότητα του.0,50 πιθανότητα να επιστραφεί',4),(5,'Μικρό','Μερική επίδραση στην διαδικασία\r\n\r\n','Το προϊόν εν γενει θα χρειαστεί να επανελεγχθεί. Ο τελικός καταναλωτής μπορεί να μην μείνει ικανοποιημένος. Το προϊόν αγγίζει τα στάνταρ του αλλά με χαμηλά επίπεδα απόδοσης. 0,75 πιθανότητα επιστροφής',5),(6,'Μέτριο','Μερική επίδραση στην διαδικασία','Ένα τμήμα του προϊόντος ίσως πρέπει να απορριφθεί. Ο τελικός καταναλωτής δεν μένει πλήρως ικανοποιημένος. Το προϊόν μετά βίας αγγίζει τα στάνταρ του με πολύ χαμηλά επίπεδα απόδοσης.',6),(7,'Υψηλό','Μερική επίδραση στην διαδικασία','Ένα τμήμα του προϊόντος πρέπει να επανελεγχθεί και ένα άλλο να απορριφτεί. Το προϊόν δεν είναι λειτουργικό. Ο τελικός καταναλωτής είναι εμφανώς δυσαρεστημένος\r\n',7),(8,'Πολύ υψηλό','Ισχυρή επίδραση στην διαδικασία','Το προϊόν εν γένει ίσως θα πρέπει να απορριφθεί. Ολοκληρωτική απουσία λειτουργικότητας. Ο τελικός καταναλωτής είναι ιδιαίτερα δυσαρεστημένος',8),(9,'Επικίνδυνο με επισήμανση','Πιθανότητα ατυχήματος κατά την διαδικασία','Η αστοχία εμφανίζεται με κάποιο τρόπο επισήμανσης. Ο τρόπος αστοχίας επηρεάζει την ασφάλεια της διαδικασίας και περιλαμβάνει παραβίαση των κανονισμών',9),(10,'Επικίνδυνο χωρίς προειδοποίηση','Πιθανότητα ατυχήματος κατά την διαδικασία','Η αστοχία εμφανίζεται χωρίς τρόπο επισήμανσης. Επηρεάζει την ασφάλεια της διαδικασίας και περιλαμβάνει παραβίαση των κανονισμών.',10);
/*!40000 ALTER TABLE `Severity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `System_parts`
--

DROP TABLE IF EXISTS `System_parts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `System_parts` (
  `system_part_id` int NOT NULL AUTO_INCREMENT,
  `procedure_step` varchar(200) DEFAULT NULL,
  `variable` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`system_part_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `System_parts`
--

LOCK TABLES `System_parts` WRITE;
/*!40000 ALTER TABLE `System_parts` DISABLE KEYS */;
INSERT INTO `System_parts` VALUES (2,'Παραλαβή και έλεγχος','Διοίκηση'),(3,'Παραλαβή και έλεγχος','Υλικά'),(4,'Προετοιμασία ελαίων','Εξοπλισμός'),(5,'Προετοιμασία ελαίων','Υλικά'),(6,'Προετοιμασία ελαίων','Διαδικασία'),(7,'Προετοιμασία ελαίων','Περιβάλλον'),(8,'Συσκευασία','Εξοπλισμός'),(10,'Συσκευασία','Υλικά'),(11,'Αποθήκευση και διανομή','Εξοπλισμός'),(12,'Αποθήκευση και διανομή','Υλικά');
/*!40000 ALTER TABLE `System_parts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `username` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES ('myros','$2a$12$s38CQifxvEMdcN6y7mxmpuwSv6aYVvF9fCKv73oJHcJuSCsqHZLsa',1);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-16 15:00:05
