/*
  Warnings:

  - Added the required column `ENDERECO` to the `routes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "routes" ADD COLUMN     "ENDERECO" TEXT NOT NULL;
