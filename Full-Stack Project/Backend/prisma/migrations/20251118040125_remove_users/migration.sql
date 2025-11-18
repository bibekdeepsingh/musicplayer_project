/*
  Warnings:

  - You are about to drop the column `userId` on the `NowPlaying` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "NowPlaying" DROP CONSTRAINT "NowPlaying_userId_fkey";

-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_userId_fkey";

-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_userId_fkey";

-- DropIndex
DROP INDEX "NowPlaying_userId_key";

-- AlterTable
ALTER TABLE "NowPlaying" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "userId";

-- DropTable
DROP TABLE "User";
