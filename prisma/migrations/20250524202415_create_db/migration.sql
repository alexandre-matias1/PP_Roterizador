-- CreateTable
CREATE TABLE "routes" (
    "id" INTEGER NOT NULL,
    "VEICULO" TEXT NOT NULL,
    "FILDOC" TEXT NOT NULL,
    "DOC" TEXT NOT NULL,
    "SERIE" TEXT NOT NULL,
    "LAT" DOUBLE PRECISION NOT NULL,
    "LNG" DOUBLE PRECISION NOT NULL,
    "ENDERECO" TEXT NOT NULL,

    CONSTRAINT "routes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "filial" TEXT NOT NULL,
    "latFilial" DOUBLE PRECISION NOT NULL,
    "lngFilial" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoutesChange" (
    "id" INTEGER NOT NULL,
    "wasRoute" TEXT NOT NULL,
    "toRoute" TEXT NOT NULL,
    "route_id" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RoutesChange_pkey" PRIMARY KEY ("id")
);
