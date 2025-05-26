import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

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