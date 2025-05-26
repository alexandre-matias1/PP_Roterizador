 
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const carId = searchParams.get("carId[]")


    const selectAllCars = await prisma.routes.findMany({
      where:{
        VEICULO: String(carId)
      },
      select: {
        id:true,
        VEICULO: true,
        ENDERECO: true,
      },
    });

    const renameJSON = selectAllCars.map((car)=>({
      id: car.id,
      frota: car.VEICULO,
      entrega: car.ENDERECO
    }))

    
   

    return NextResponse.json({address:renameJSON});
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Falha ao buscar os veiculos" },
      { status: 500 }
    );
  }
}


