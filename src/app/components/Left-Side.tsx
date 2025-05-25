/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Card } from "@/components/ui/card";
import { ChevronDown, PencilLine } from "lucide-react";
import { RoutesContext } from "../context/data-context";
import { useContext, useState } from "react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { api } from "@/lib/axios";

export function LeftSide() {
  const { routesData: routes, fetchData } = useContext(RoutesContext);
  const [select, setSelect] = useState<any>();
  const [position, setPosition] = useState<string>("");

  console.log(position);

  return (
    <>
      {routes.map((route, index) => (
        <Card key={index} className="w-[480px] bg-zinc-950 mb-4">
          <div className="flex items-center justify-between h-1 pl-6 pr-6 py-3">
            <span className="text-zinc-100 font-bold">
              <span
                className="text-white px-2 py-1 rounded"
                style={{ backgroundColor: route.color }}
              >
                Veículo #{route.car}
              </span>
            </span>

            <Dialog>
              <DialogTrigger asChild>
                <button>
                  <ChevronDown color="#f1f2f2" size={30} />
                </button>
              </DialogTrigger>

              <DialogContent className="max-h-80 overflow-y-auto">
                <DialogTitle className="font-semibold">
                  <span>Visão geral da rota</span>
                </DialogTitle>
                <div className="border-b border-zinc-300"></div>

                <table className="w-full text-sm text-left text-zinc-900 border-separate border-spacing-y-2">
                  <thead>
                    <tr>
                      <th className="px-4 text-zinc-800">Número do veículo</th>
                      <th className="px-4 text-zinc-800">Endereço</th>
                      <th className="px-4 text-zinc-800">Alterar rota</th>
                    </tr>
                  </thead>
                  <tbody>
                    {route.routes.map((item, index) => (
                      <tr key={index} className="bg-white rounded-lg">
                        <td className="px-4 py-2 font-medium text-zinc-800">
                          {route.car}
                        </td>
                        <td className="px-4 py-2 text-zinc-800">
                          {item.address}
                        </td>
                        <td className="px-4 py-2">
                          <Popover>
                            <PopoverTrigger asChild>
                              <button onClick={() => setSelect(item.id)}>
                                <PencilLine />
                              </button>
                            </PopoverTrigger>
                            <PopoverContent>
                              {select && select.id === route.id && (
                                <div className="">
                                  <p className="font-semibold border-b-1 border-zinc-400 pb-2">
                                    Selecione o veiculo para troca:
                                  </p>
                                  <div className="flex justify-between">
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <button className=" w-27 bg-zinc-950 text-zinc-50 p-3 rounded-2xl mt-3">
                                          Veiculos
                                        </button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent className="w-56">
                                        <DropdownMenuLabel>
                                          Panel Position
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuRadioGroup
                                          value={position}
                                          onValueChange={setPosition}
                                        >
                                          {routes.map((carId) => (
                                            <DropdownMenuRadioItem
                                              key={carId.car}
                                              value={String(carId.car)}
                                            >
                                              {carId.car}
                                            </DropdownMenuRadioItem>
                                          ))}
                                        </DropdownMenuRadioGroup>
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                    <button
                                      //ADICIONAR TOAST CASO NAO ESTEJA DE ACORDO PARA ENVIO
                                      onClick={async () => {
                                        try {
                                          if (select && route.car && position) {
                                            await api.post("/api/cars", {
                                              id: select,
                                              oldCarId: route.car,
                                              newCarId: position,
                                            });
                                            await fetchData();
                                            setPosition("");
                                          }

                                          console.log("foi");
                                        } catch {
                                          // interface ChangeRouteProps{
                                          //   id: number,
                                          //   oldCarId: number,
                                          //   newCarId: number
                                          // }
                                        }
                                      }}
                                      className="w-27 bg-emerald-600 text-zinc-50 p-4 rounded-2xl mt-3"
                                    >
                                      Alterar
                                    </button>
                                  </div>
                                </div>
                              )}
                            </PopoverContent>
                          </Popover>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </DialogContent>
            </Dialog>
          </div>
        </Card>
      ))}
    </>
  );
}
