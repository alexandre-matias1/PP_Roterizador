"use client";
import { useMaps } from "@/hooks/maps";
import { api } from "@/lib/axios";
import Script from "next/script";
import { useEffect, useState } from "react";

interface RoutePoint {
  lat: number;
  lng: number;
  id: number;
}

interface CarRoute {
  car: number;
  color: string;
  routes: RoutePoint[];
}

export function Map() {
  const [routes, setRoutes] = useState<CarRoute[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadMaps, setLoadMaps] = useState(false);

  const { map, mapRef } = useMaps({
    center: {
      lat: -19.959282,
      lng: -44.031152,
    },
    zoom: 10,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("api/cars");
        setRoutes(response.data);
        setError(null);
      } catch (error) {
        console.error(`Error: ${error}`);
        setError("Failed to fetch routes data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (routes.length === 0 || !loadMaps || !map || !window.google.maps) {
      return;
    }

    console.log(routes);
    for (let i = 0; i <= routes.length - 1; i++) {
      const plotingMapFunc = () => {
        const directionsService = new window.google.maps.DirectionsService();
        const directionRenderer = new window.google.maps.DirectionsRenderer({
          polylineOptions: {
            strokeColor: routes[i].color,
            strokeOpacity: 0.8,
            strokeWeight: 4,
          },
        });

        directionRenderer.setMap(map);

        directionsService.route(
          {
            origin: { lat: -19.959282, lng: -44.031153 },
            destination: { lat: -19.959282, lng: -44.031153 },
            waypoints: routes[i].routes.map((point) => ({
              location: { lat: point.lat, lng: point.lng },
            })),
            travelMode: google.maps.TravelMode.DRIVING,
            optimizeWaypoints: true,
          },
          (result, status) => {
            if (status === google.maps.DirectionsStatus.OK && result) {
              directionRenderer.setDirections(result);
            } else {
              console.error("Erro ao buscar rota:", status);
            }
          }
        );
        // return () => {
        //   directionRenderer.setMap(null);
        //   console.log('Limpo')
        // };
      };
      plotingMapFunc();
    }
  }, [routes, map, loadMaps]);

  if (loading) {
    return <div>Loading routes data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="afterInteractive"
        onLoad={() => setLoadMaps(true)}
      />
      <div ref={mapRef} className="w-full h-svh rounded-lg shadow"></div>
    </>
  );
}
