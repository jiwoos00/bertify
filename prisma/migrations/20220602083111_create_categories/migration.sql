/*
  Warnings:

  - Added the required column `addr` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `addr` VARCHAR(191) NOT NULL,
    ADD COLUMN `auth` BOOLEAN NOT NULL DEFAULT false;
