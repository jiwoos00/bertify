/*
  Warnings:

  - A unique constraint covering the columns `[tokenId]` on the table `Random` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Random_tokenId_key` ON `Random`(`tokenId`);
