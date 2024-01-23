// MapComponent.js
import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import redMarkerIcon from "./red.png"; // No need for directory changes

const libraries = ["places"];
const mapContainerStyle = {
  width: "70vw",
  height: "70vh",
};
const homeLocation = {
  lat: 9.041884, // replace with the actual latitude of your home
  lng: 38.713022, // replace with the actual longitude of your home
};

const MapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBe9CvucIPIOfiTIeIVplMIprvRIehgNic",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  // Calculate the appropriate zoom level based on your use case
  const zoom = 16;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={zoom}
        center={homeLocation}
      >
        <Marker
          position={homeLocation}
          icon={{
            url: redMarkerIcon,
            scaledSize: new window.google.maps.Size(50, 50),
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
