-- CreateTable
CREATE TABLE "routes" (
    "id" TEXT NOT NULL,
    "VEICULO" TEXT NOT NULL,
    "FILDOC" TEXT NOT NULL,
    "DOC" TEXT NOT NULL,
    "SERIE" TEXT NOT NULL,
    "LAT" DOUBLE PRECISION NOT NULL,
    "LNG" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "routes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "filial" TEXT NOT NULL,
    "latFilial" DOUBLE PRECISION NOT NULL,
    "lngFilial" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
