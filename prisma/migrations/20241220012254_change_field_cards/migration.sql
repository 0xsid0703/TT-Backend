/*
  Warnings:

  - You are about to drop the column `co2_level` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `gdp_level` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `nature_level` on the `Card` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "co2_level",
DROP COLUMN "gdp_level",
DROP COLUMN "nature_level";
