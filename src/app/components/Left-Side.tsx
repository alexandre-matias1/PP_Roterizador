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
import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { toast } from "sonner";

const zones = [
  "Zona Norte",
  "Zona Sul",
  "Zona Leste",
  "Zona Oeste",
];
export function LeftSide() {
  const { fetchUniqueRoute, cars, address, fetchFilterRoutes } =
    useContext(RoutesContext);
  const [select, setSelect] = useState<any>();
  const [position, setPosition] = useState<string>("");
  const [pickCar, setPickCar] = useState<string[]>([]);

  const handleCheckboxChange = (value: string, checked: CheckedState) => {
    setPickCar((state) => {
      if (checked) {
        return [...state, value];
      } else {
        return state.filter((item) => item !== value);
      }
    });
  };

  return (
    <>
      <div className="flex justify-between items-center mx-10 mb-5  bg-zinc-950">
        <span className="text-zinc-100 font-semibold text-xl">
          Lista de frotas
        </span>
        <button
          onClick={() => {
            fetchFilterRoutes(pickCar);
          }}
          className="text-zinc-50 bg-red-950 px-6 py-3 rounded-2xl hover:bg-red-900"
        >
          Filtrar
        </button>
      </div>
      <div className="flex flex-col items-center">
        {cars &&
          cars.map((car, index) => (
            <Card
              key={index}
              className="w-[480px] bg-zinc-950 rounded-2xl mb-4"
            >
              <div className="flex items-center justify-between pr-6 ">
                <div className="flex items-center gap-3 h-1 pl-6 py-3">
                  <Checkbox
                    id={car.frota.toString()}
                    className="w-5 h-5"
                    checked={pickCar.includes(`${car.frota.toString()}`)}
                    onCheckedChange={(checked) => {
                      handleCheckboxChange(`${car.frota.toString()}`, checked);
                    }}
                  />

                  <span
                    className="text-white font-semibold px-2 py-1 rounded"
                    style={{ backgroundColor: car.rgb }}
                  >
                    Veiculo {car.frota} - {zones[index % 4]}
                  </span>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      onClick={() => {
                        fetchUniqueRoute([car.frota.toString()]);
                      }}
                    >
                      <ChevronDown
                        color="#f1f1f1"
                        className="hover:bg-zinc-800 transition rounded"
                      />
                    </button>
                  </DialogTrigger>
                  <DialogContent className=" max-h-80 overflow-y-auto">
                    <DialogTitle>
                      <span>Visão geral da rota</span>
                    </DialogTitle>
                    <div className="border-b border-zinc-300" />
                    <table className="w-full text-sm text-left text-zinc-900 border-separate border-spacing-y-2">
                      <thead>
                        <tr>
                          <th className="px-4 text-zinc-800">
                            Número do veículo
                          </th>
                          <th className="px-4 text-zinc-800">Endereço</th>
                          <th className="px-4 text-zinc-800">Alterar rota</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.isArray(address) &&
                          address.map((add, index) => (
                            <tr key={index} className="bg-white rounded-lg">
                              <td className="px-4 py-2 font-medium text-zinc-800">
                                {add.frota}
                              </td>
                              <td className="px-4 py-2 text-zinc-800">
                                {add.entrega}
                              </td>
                              <td className="px-5">
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <button
                                      onClick={() => {
                                        setSelect(add.id);
                                      }}
                                    >
                                      <PencilLine
                                        size={40}
                                        className="hover:bg-zinc-200 rounded-2xl py-2"
                                      />
                                    </button>
                                  </PopoverTrigger>
                                  <PopoverContent>
                                    <div className="">
                                      <p className="font-semibold border-b-1 border-zinc-400 pb-2">
                                        Selecione o veiculo para troca:
                                      </p>
                                      <div className="flex justify-between">
                                        <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                            <button className=" w-27 bg-zinc-950 hover:bg-zinc-900 text-zinc-50 p-3 rounded-2xl mt-3">
                                              Veiculos
                                            </button>
                                          </DropdownMenuTrigger>
                                          <DropdownMenuContent className="w-56">
                                            <DropdownMenuLabel>
                                              Lista de frotas:
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuRadioGroup
                                              value={position}
                                              onValueChange={setPosition}
                                            >
                                              {cars.map((carId) => (
                                                <DropdownMenuRadioItem
                                                  key={carId.frota}
                                                  value={String(carId.frota)}
                                                >
                                                  {carId.frota}
                                                </DropdownMenuRadioItem>
                                              ))}
                                            </DropdownMenuRadioGroup>
                                          </DropdownMenuContent>
                                        </DropdownMenu>
                                        <button
                                          className="w-27 bg-emerald-600 hover:bg-emerald-700 text-zinc-50 p-4 rounded-2xl mt-3"
                                          onClick={async () => {
                                            try {
                                              if (position === add.frota) {
                                                toast.error("Selecione uma frota")
                                                return;
                                              }
                                              if (
                                                select &&
                                                add.frota &&
                                                position
                                              ) {
                                                await api.post(
                                                  "/api/cars/update",
                                                  {
                                                    id: select,
                                                    oldCarId: add.frota,
                                                    newCarId: position,
                                                  }
                                                );
                                                toast.success("Rota alterada com sucesso")
                                                setPosition("");
                                                await fetchFilterRoutes(
                                                  pickCar
                                                );
                                                await fetchUniqueRoute([
                                                  add.frota,
                                                ]);
                                                toast.success(
                                                  "Rota alterada com sucesso"
                                                );
                                              } else {
                                                toast.error("Selecione uma frota");
                                              }
                                            } catch {
                                              toast.error("Falha ao alterar rota");
                                            }
                                          }}
                                        >
                                          Alterar
                                        </button>
                                      </div>
                                    </div>
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
      </div>
    </>
  );
}
