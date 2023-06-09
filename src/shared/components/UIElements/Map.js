import React, { useRef, useEffect, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import "./Map.css";

const Map = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });
  
  const { center, zoom } = props;
  
  const centerMarker = useMemo(() => center, [])

  // const mapRef = useRef();
  // useEffect(() => {
  //   const map = new window.google.maps.Map(mapRef.current, {
  //     center: center,
  //     zoom: zoom
  //   });
  //   new window.google.maps.Marker({ position: center, map: map });
  // }, [center, zoom]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      // ref={mapRef}
      zoom={zoom}
      center={center}
      mapContainerClassName={`map ${props.className}`}
      // className={`map ${props.className}`}
      style={props.style}
    >
      <Marker position={centerMarker} />
    </GoogleMap>
  );
};

export default Map;
