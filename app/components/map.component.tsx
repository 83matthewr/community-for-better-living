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
  
    return <div className="h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]" ref={ref} id="map" />
  }
  
export default Map;