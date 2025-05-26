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

export interface CarsProps {
  frota: string;
  rgb: string;
}

export interface AddressProps {
  id: string;
  frota: string;
  entrega: string;
}

export interface RouteContextType {
  routesData: RouteProps[];
  cars: CarsProps[];
  address: AddressProps[];
  setRoutes: React.Dispatch<React.SetStateAction<RouteProps[]>>;
  fetchData: () => Promise<void>;
  fetchFilterRoutes: (cars: string[]) => Promise<void>;
  fetchUniqueRoute: (car: string[]) => Promise<void>;
}

export const RoutesContext = createContext({} as RouteContextType);

export function RoutesProvider({ children }: RoutesProviderProps) {
  const [routes, setRoutes] = useState<RouteProps[]>([]);
  const [address, setAddress] = useState<AddressProps[]>([]);
  const [cars, setCars] = useState<CarsProps[]>([]);

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
      console.log(cars)
      const responseFilter = await api.post("api/cars/filter", {
        cars: cars
      });
      setRoutes(responseFilter.data);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }, []);

  const fetchUniqueRoute = useCallback(async (carId: string[]) => {
    try {
      const response = await api.get("api/cars/routes", {
        params: {
          "carId[]": carId,
        },
      });
      setAddress(response.data.address);
    } catch {
      console.error("Erro ao buscar endereços");
    }
  }, []);

  

  useEffect(() => {
    fetchData();
  },[fetchData]);

  return (
    <RoutesContext.Provider
      value={{
        routesData: routes,
        fetchData,
        setRoutes,
        fetchFilterRoutes,
        cars,
        fetchUniqueRoute,
        address,
      }}
    >
      {children}
    </RoutesContext.Provider>
  );
}
