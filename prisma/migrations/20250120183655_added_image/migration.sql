/*
  Warnings:

  - Added the required column `stackId` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "stackId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ImageStack" (
    "id" SERIAL NOT NULL,
    "artistId" INTEGER NOT NULL,

    CONSTRAINT "ImageStack_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ImageStack" ADD CONSTRAINT "ImageStack_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_stackId_fkey" FOREIGN KEY ("stackId") REFERENCES "ImageStack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
