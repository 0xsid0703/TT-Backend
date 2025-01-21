/*
  Warnings:

  - You are about to drop the column `event_sub_groupId` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the `Event_Sub_Group` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_event_sub_groupId_fkey";

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "event_sub_groupId";

-- DropTable
DROP TABLE "Event_Sub_Group";
