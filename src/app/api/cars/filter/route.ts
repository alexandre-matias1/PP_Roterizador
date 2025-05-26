import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { cars } = body;

  
    const routes = await prisma.routes.findMany({
      where:{
        VEICULO:{
          in: cars
        }
      },
    });

 


    const unionLatLngInTheCar = routes.reduce((acc, item) => {
      const key = item.VEICULO.toString();
      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push({
        LAT: item.LAT,
        LNG: item.LNG,
        id: item.id,
        address: item.ENDERECO,
        rgb: item.rgb
      });
      return acc;
    }, {} as Record<string, { LAT: number; LNG: number; id: number; address: string; rgb: string }[]>);


    const result = Object.entries(unionLatLngInTheCar).map(
      ([carId, routes]) => ({
        car: parseInt(carId),
        color: routes[0].rgb,
        routes: routes.map((route) => ({
          lat: route.LAT,
          lng: route.LNG,
          id: route.id,
          address: route.address,
          rgb: route.rgb
        })),
      })
    );

    return NextResponse.json(result,{ status: 200 });
  } catch (error){
    return NextResponse.json(
      { error: "Erro ao registrar troca de rota", detalhe: String(error) },
      { status: 500 }
    )
  }
}