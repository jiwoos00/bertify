/*
  Warnings:

  - The primary key for the `Col` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userAdd` on the `Col` table. All the data in the column will be lost.
  - Added the required column `userAddr` to the `Col` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Col` DROP PRIMARY KEY,
    DROP COLUMN `userAdd`,
    ADD COLUMN `auth` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `userAddr` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`colAddr`, `userAddr`);
