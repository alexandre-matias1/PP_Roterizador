"use client";
import { useMaps } from "@/hooks/maps";
import Script from "next/script";
import { useContext, useEffect, useRef, useState } from "react";
import { RoutesContext } from "../context/data-context";
import { createBaseIcon } from "../assets/icon";

export function Map() {
  const { routesData: routes } = useContext(RoutesContext);
  const renderersRef = useRef<google.maps.DirectionsRenderer[]>([]);
  const [loadMaps, setLoadMaps] = useState(false);
  const markersRef = useRef<google.maps.Marker[]>([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const latlng = {
    lat: -19.959282,
    lng: -44.031152,
  };
  const { map, mapRef } = useMaps({
    center: latlng,
    zoom: 14,
  });

  const clearRoutes = () => {
    renderersRef.current.forEach((renderer) => renderer.setMap(null));
    renderersRef.current = [];

    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];
  };

  if (routes.length === 0) {
    clearRoutes();
  }

  useEffect(() => {
    if (routes.length === 0 || !loadMaps || !map || !window.google.maps) {
      return;
    }

    clearRoutes();

    new google.maps.Marker({
      position: latlng,
      map,
      label: "",
      icon: createBaseIcon(),
    });

    for (let i = 0; i <= routes.length - 1; i++) {
      const plotingMapFunc = () => {
        const directionsService = new window.google.maps.DirectionsService();
        const directionRenderer = new window.google.maps.DirectionsRenderer({
          suppressMarkers: true,
          polylineOptions: {
            strokeColor: routes[i].color,
            strokeOpacity: 1,
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
              renderersRef.current.push(directionRenderer);

              const route = result.routes[0];
              const legs = route.legs;

              for (let k = 0; k < legs.length - 1; k++) {
                const marker = new google.maps.Marker({
                  position: legs[k].end_location,
                  map,
                  label: {
                    text: `${k + 1}`,
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "bold",
                  },
                  icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 15,
                    fillColor: routes[i].color,
                    fillOpacity: 1,
                    strokeWeight: 2,
                    strokeColor: "white",
                  },
                });

                markersRef.current.push(marker);
              }
            }
          }
        );
        return () => directionRenderer.setDirections(null);
      };
      plotingMapFunc();
    }
  }, [routes, map, loadMaps, latlng]);

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="afterInteractive"
        onLoad={() => setLoadMaps(true)}
      />
      <div ref={mapRef} className="w-full h-svh shadow"></div>
    </>
  );
}
