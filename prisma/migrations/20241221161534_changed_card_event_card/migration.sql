-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_event_sub_groupId_fkey";

-- AlterTable
ALTER TABLE "Card" ALTER COLUMN "event_sub_groupId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_event_sub_groupId_fkey" FOREIGN KEY ("event_sub_groupId") REFERENCES "Event_Sub_Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;
