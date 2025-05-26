 
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const carId = searchParams.get("car")


    const selectAllCars = await prisma.routes.findMany({
      where:{
        VEICULO: String(carId)
      },
      select: {
        VEICULO: true,
        ENDERECO: true,
      },
    });

    const renameJSON = selectAllCars.map((car)=>({
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


