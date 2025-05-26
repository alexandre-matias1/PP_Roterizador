"use client";

import { api } from "@/lib/axios";
import { createContext, useCallback, useEffect, useState } from "react";

interface RoutesProviderProps {
  children: React.ReactNode;
}

interface RouteLatLngProps {
  lat: number;
  lng: number;
  id: number;
  address: string;
  color: string;
}

export interface RouteProps {
  car: number;
  color: string;
  id: number;
  address: string;
  routes: RouteLatLngProps[];
}

export interface CarsProps{
  frota: string
  rgb: string
}

export interface AddressProps{
  frota: string
  entrega: string
}

export interface RouteContextType {
  routesData: RouteProps[];
  cars: CarsProps[]
  setRoutes: React.Dispatch<React.SetStateAction<RouteProps[]>>;
  fetchData: () => Promise<void>;
  fetchFilterRoutes: (cars:string[]) => Promise<void>;
  fetchUniqueRoute: (car:string[]) => Promise<void>;
}

export const RoutesContext = createContext({} as RouteContextType);

export function RoutesProvider({ children }: RoutesProviderProps) {
  const [routes, setRoutes] = useState<RouteProps[]>([]);
  const [address, setAddress] = useState<>([])
  const [cars, setCars] = useState<CarsProps[]>([])

  
  const fetchData = useCallback(async () => {
    try {
      const response = await api.get("api/cars");
      setCars(response.data);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }, []);
  const fetchFilterRoutes = useCallback(async (cars: string[]) => {
    try {
      const responseFilter = await api.post("api/cars/filter", cars);
      setRoutes(responseFilter.data);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }, []);
  const fetchUniqueRoute = useCallback(async (carId: string[]) =>{
    try{
      const response = await api.get("api/cars/routes",{
        params: { carId }
      })
      setAddress(response.data)
    }catch{
      console.error("Erro ao buscar endereços")
    }
  },[])


  useEffect(()=>{
    fetchData()
  },[fetchData])
  

  
  
  console.log(cars)
  return (
    <RoutesContext.Provider
      value={{ routesData: routes, fetchData, setRoutes, fetchFilterRoutes, cars, fetchUniqueRoute }}
    >
      {children}
    </RoutesContext.Provider>
  );
}
