-- CreateTable
CREATE TABLE "Bacteria" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Bacteria_pkey" PRIMARY KEY ("id")
);
