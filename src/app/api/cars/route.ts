 
import { prisma } from "@/lib/prisma";
import { getRandomColor } from "@/lib/randomColor";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const allCars = await prisma.routes.findMany({
      select: {
        id: true,
        VEICULO: true,
        LAT: true,
        LNG: true,
        ENDERECO: true,
        rgb: true
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

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Falha ao buscar os veiculos" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, newCarId, oldCarId } = body;

    // id é a rota latlng
    // newCar é pra onde vai a nova rota
    // oldCarId é a antiga rota

    const route = await prisma.routes.findUnique({
      where: { id },
    });

    console.log(route)

    await prisma.routes.update({
      where:{
        id
      },
      data:{
        VEICULO: String(newCarId)
      }
    })


     await prisma.routesChange.create({
      data: {
        wasRoute: String(oldCarId),
        toRoute: String(newCarId),
        route_id: String(id),
        user_id: 302,
        createdAt: new Date()
      }
    })

    return NextResponse.json({message:"Rota atualizada"},{ status: 200 });
  } catch (error){
    return NextResponse.json(
      { error: "Erro ao registrar troca de rota", detalhe: String(error) },
      { status: 500 }
    )
  }
}
