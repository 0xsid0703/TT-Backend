-- AlterTable
CREATE SEQUENCE image_id_seq;
ALTER TABLE "Image" ALTER COLUMN "id" SET DEFAULT nextval('image_id_seq');
ALTER SEQUENCE image_id_seq OWNED BY "Image"."id";
