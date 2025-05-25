-- AlterTable
CREATE SEQUENCE routeschange_id_seq;
ALTER TABLE "RoutesChange" ALTER COLUMN "id" SET DEFAULT nextval('routeschange_id_seq');
ALTER SEQUENCE routeschange_id_seq OWNED BY "RoutesChange"."id";
