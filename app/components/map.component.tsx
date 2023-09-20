'use client'

import { useRef, useEffect } from 'react';

function Map({
    center,
    zoom,
  }: {
    center: google.maps.LatLngLiteral;
    zoom: number;
  }) {
    const ref = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
        if (ref.current) {
            new window.google.maps.Map(ref.current, {
                center,
                zoom,
            });
        }
    });
  
    return <div className="h-full w-full" ref={ref} id="map" />
  }
  
export default Map;