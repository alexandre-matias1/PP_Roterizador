import { Card } from "@/components/ui/card";
import { ChevronDown, PencilLine } from "lucide-react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useContext } from "react";
import { RoutesContext } from "../context/data-context";


export function LeftSide() {
  const { routesData: routes, setRoutes } = useContext(RoutesContext);

  return (
    <>
      <Card className="w-[480px] bg-zinc-900">
        <div className="flex items-center justify-between pl-6 pr-6">
          <span className="text-zinc-100 font-bold">Frota 1021</span>
          <Dialog>
            <DialogTrigger asChild>
              <button>
                <ChevronDown />
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle className="font-semibold">
                Visão geral da rota
              </DialogTitle>
              <DialogDescription>
                <div className="border-b-1 border-zinc-300"></div>
              </DialogDescription>
              <table className="w-full text-sm text-left text-zinc-900 border-separate border-spacing-y-2">
                <thead>
                  <tr>
                    <th className="px-4 text-zinc-800 ">Número do veículo</th>
                    <th className="px-4 text-zinc-800 ">Endereço</th>
                    <th className="px-4 text-zinc-800 ">Alterar rota</th>
                  </tr>
                </thead>
                {/* <tbody>
                  {routes.map((route) => (
                    <tr key={route.id} className="bg-zinc-800 rounded-lg">
                      <td className="px-4 py-2 font-medium text-zinc-100">
                        #{route.car}
                      </td>
                      <td className="px-4 py-2">
                        {Array.isArray(route.routes)
                          ? route.routes.join(", ")
                          : String(route.routes)}
                      </td>
                      <td className="px-4 py-2">
                        <button className="text-blue-500 hover:underline">
                          Editar
                        </button>
                      </td>
                    </tr> */}
                  ))}
                </tbody>
              </table>
            </DialogContent>
          </Dialog>
        </div>
      </Card>
    </>
  );
}
{
  /* <Popover>
            <PopoverTrigger asChild>
              <button>
                <ChevronDown color="#f2f2f2" />
              </button>
            </PopoverTrigger>
            <PopoverContent className=" bg-zinc-400 border-0">
              <div className="flex items-center justify-between pl-1 pr-1">
              <p>Oiii</p>
              <PencilLine />

              </div>
            </PopoverContent>
          </Popover> */
}
