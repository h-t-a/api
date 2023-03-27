CREATE SCHEMA `db_smp`;

CREATE TABLE `db_smp`.`tbl_admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `admin_name` VARCHAR(45) NULL,
  `admin_email` VARCHAR(45) NULL,
  `admin_password` VARCHAR(45) NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `db_smp`.`tbl_buyer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `buyer_name` VARCHAR(45) NULL,
  `buyer_email` VARCHAR(45) NULL,
  `buyer_password` VARCHAR(45) NULL,
  `buyer_phoneNumber` VARCHAR(15) NULL,
  `buyer_address` VARCHAR(200) NULL,
  `buyer_profile` VARCHAR(255) NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `db_smp`.`tbl_seller` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `seller_name` VARCHAR(45) NULL,
  `seller_email` VARCHAR(45) NULL,
  `seller_password` VARCHAR(45) NULL,
  `seller_phoneNumber` VARCHAR(15) NULL,
  `seller_address` VARCHAR(200) NULL,
  `seller_profile` VARCHAR(255) NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `db_smp`.`seller_post` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `seller_id` INT NOT NULL,
  `description` TEXT NULL,
  `seller_password` VARCHAR(45) NULL,
  `qty` INT NULL,
  `unit_price` DECIMAL(10,2) NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `db_smp`.`pre_order` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `seller_post_id` INT NOT NULL,
  `buyer_id` INT NOT NULL,
  `qty` INT NULL,
  `unit_price` DECIMAL(10,2) NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`));
