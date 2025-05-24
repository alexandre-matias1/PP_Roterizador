"use client"

import { api } from "@/lib/axios";
import { createContext, useCallback, useEffect, useState } from "react";

interface RoutesProviderProps{
  children: React.ReactNode
}

interface RouteLatLngProps {
  lat: number;
  lng: number;
  id: number;
}


interface RouteProps{
  car: number;
  color: string;
  id: string;
  routes: RouteLatLngProps[];
}

export interface RouteContextType{
  routesData: RouteProps[];
  setRoutes: React.Dispatch<React.SetStateAction<RouteProps[]>>
  fetchData: () => Promise<void>;
}


export const RoutesContext = createContext({} as RouteContextType);

export function RoutesProvider({ children }: RoutesProviderProps){
  const [routes, setRoutes] = useState<RouteProps[]>([])
      const fetchData = useCallback(async () => {
        try {
          const response = await api.get("api/cars");
          setRoutes(response.data); 
        } catch (error) {
          console.error(`Error: ${error}`);
        }
      },[])
      
      useEffect(() =>{
        fetchData();
      },[fetchData])
      return (
        <RoutesContext.Provider value={{routesData: routes, fetchData, setRoutes }}>
          {children}
        </RoutesContext.Provider>
      )
}