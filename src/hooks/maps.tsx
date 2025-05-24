import { useEffect, useRef, useState } from "react";

interface UseGoogleMapProps {
  center?: google.maps.LatLngLiteral;
  zoom?: number;
  mapId?: string;
}

const filialLatLng = {
  lat: -19.959282,
  lng: -44.031153
}


export function useMaps({ center, zoom = 14, mapId }: UseGoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !map && window.google?.maps) {
      console.log(mapRef.current, map, window.google.maps)
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center:filialLatLng,
        zoom,
        mapId,
      });
      console.log('SetMap')
      setMap(mapInstance);
    }
  }, [zoom, map, mapId, center]);

  return { mapRef, map };
}
