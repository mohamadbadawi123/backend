-- AlterTable
ALTER TABLE `product` ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `slogan` VARCHAR(191) NULL,
    MODIFY `image` VARCHAR(191) NULL,
    MODIFY `title` VARCHAR(191) NULL;
