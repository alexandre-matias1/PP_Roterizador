import { useEffect, useRef, useState } from "react";

interface UseGoogleMapProps {
  center?: google.maps.LatLngLiteral;
  zoom?: number;
  mapId?: string;
}



export function useMaps({ center, zoom, mapId }: UseGoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !map && window.google?.maps) {
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
        mapId,
      });
      setMap(mapInstance);
    }
  }, [zoom, map, mapId, center]);

  return { mapRef, map };
}
