/*
  Warnings:

  - Added the required column `number` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "number" INTEGER NOT NULL;
