/*
  Warnings:

  - You are about to drop the column `rgb` on the `users` table. All the data in the column will be lost.
  - Added the required column `rgb` to the `routes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "routes" ADD COLUMN     "rgb" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "rgb";
