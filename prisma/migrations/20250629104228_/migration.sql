/*
  Warnings:

  - You are about to drop the column `description` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `slogan` on the `product` table. All the data in the column will be lost.
  - Made the column `image` on table `product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `description`,
    DROP COLUMN `slogan`,
    MODIFY `image` VARCHAR(191) NOT NULL,
    MODIFY `title` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `ProductType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `slogan` VARCHAR(191) NOT NULL,
    `productId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductType` ADD CONSTRAINT `ProductType_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
