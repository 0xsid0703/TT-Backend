/*
  Warnings:

  - You are about to drop the column `co2` on the `Event_Sub_Group` table. All the data in the column will be lost.
  - You are about to drop the column `gdp` on the `Event_Sub_Group` table. All the data in the column will be lost.
  - You are about to drop the column `nature` on the `Event_Sub_Group` table. All the data in the column will be lost.
  - You are about to drop the column `private_initiative` on the `Event_Sub_Group` table. All the data in the column will be lost.
  - You are about to drop the column `event` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `infrastructure` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `law` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `private_initiative` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `research` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `action` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `event` on the `Type` table. All the data in the column will be lost.
  - Added the required column `subGroupName` to the `Event_Sub_Group` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupName` to the `Group` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeName` to the `Type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event_Sub_Group" DROP COLUMN "co2",
DROP COLUMN "gdp",
DROP COLUMN "nature",
DROP COLUMN "private_initiative",
ADD COLUMN     "subGroupName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Group" DROP COLUMN "event",
DROP COLUMN "infrastructure",
DROP COLUMN "law",
DROP COLUMN "private_initiative",
DROP COLUMN "research",
ADD COLUMN     "groupName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Type" DROP COLUMN "action",
DROP COLUMN "event",
ADD COLUMN     "typeName" TEXT NOT NULL;
