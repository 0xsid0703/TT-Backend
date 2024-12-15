/*
  Warnings:

  - Changed the type of `co2` on the `Event_Sub_Group` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `nature` on the `Event_Sub_Group` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `gdp` on the `Event_Sub_Group` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `private_initiative` on the `Event_Sub_Group` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Event_Sub_Group" DROP COLUMN "co2",
ADD COLUMN     "co2" INTEGER NOT NULL,
DROP COLUMN "nature",
ADD COLUMN     "nature" INTEGER NOT NULL,
DROP COLUMN "gdp",
ADD COLUMN     "gdp" INTEGER NOT NULL,
DROP COLUMN "private_initiative",
ADD COLUMN     "private_initiative" INTEGER NOT NULL;
