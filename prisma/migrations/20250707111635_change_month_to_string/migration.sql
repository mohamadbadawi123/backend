/*
  Warnings:

  - You are about to drop the `activities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `activities`;

-- CreateTable
CREATE TABLE `Activity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `day` INTEGER NOT NULL,
    `month` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
