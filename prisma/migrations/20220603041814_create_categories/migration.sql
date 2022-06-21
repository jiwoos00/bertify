/*
  Warnings:

  - The primary key for the `Col` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `Col` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`colAddr`);
