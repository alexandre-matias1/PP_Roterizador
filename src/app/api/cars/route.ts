 
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const selectAllCars = await prisma.routes.findMany({
      distinct: ['VEICULO'],
      select: {
        VEICULO: true,
        rgb: true,
      },
    });


    const cars = selectAllCars?.map((car) => ({
      frota: car.VEICULO,
      rgb: car.rgb
    }));


    return NextResponse.json(cars);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Falha ao buscar os veiculos" },
      { status: 500 }
    );
  }
}


