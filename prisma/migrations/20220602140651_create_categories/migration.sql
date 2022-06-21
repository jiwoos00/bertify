-- DropIndex
DROP INDEX `Post_authorId_fkey` ON `Post`;

-- AlterTable
ALTER TABLE `User` MODIFY `name` VARCHAR(191) NOT NULL DEFAULT 'unnamed';
