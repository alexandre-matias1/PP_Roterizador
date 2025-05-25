"use client";
import { useMaps } from "@/hooks/maps";
import Script from "next/script";
import { useContext, useEffect, useState } from "react";
import { RoutesContext } from "../context/data-context";
//Popover

export function Map() {
  const {
    fetchData,
    routesData: routes,
  } = useContext(RoutesContext);
  const [loadMaps, setLoadMaps] = useState(false);
  const { map, mapRef } = useMaps({
    center: {
      lat: -19.959282,
      lng: -44.031152,
    },
    zoom: 10,
  });


  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  useEffect(() => {
    if (routes.length === 0 || !loadMaps || !map || !window.google.maps) {
      return;
    }
    for (let i = 0; i <= 1; i++) {
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
              console.error("zero resultados")
            }
          }
        );
      };
      plotingMapFunc();
    }
  }, [routes, map, loadMaps]);

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
