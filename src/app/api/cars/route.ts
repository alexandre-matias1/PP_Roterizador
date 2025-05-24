import { prisma } from "@/lib/prisma";
import { getRandomColor } from "@/lib/randomColor";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allCars = await prisma.routes.findMany({
      select: {
        id: true,
        VEICULO: true,
        LAT: true,
        LNG: true,
      },
    });

    const unionLatLngInTheCar = allCars.reduce((acc, item) => {
      const key = item.VEICULO.toString();
      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push({
        LAT: item.LAT,
        LNG: item.LNG,
        id: item.id,
      });
      return acc;
    }, {} as Record<string, { LAT: number; LNG: number; id: string }[]>);

    const result = Object.entries(unionLatLngInTheCar).map(
      ([carId, routes]) => ({
        car: parseInt(carId),
        color:getRandomColor(),
        routes: routes.map((route) => ({
          lat: route.LAT,
          lng: route.LNG,
          id: route.id,
        })),
      })
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Falha ao buscar os veiculos" },
      { status: 500 }
    );
  }
}
