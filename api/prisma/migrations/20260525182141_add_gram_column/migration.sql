/*
  Warnings:

  - Added the required column `gram` to the `Bacteria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bacteria" ADD COLUMN     "gram" VARCHAR(8) NOT NULL;
