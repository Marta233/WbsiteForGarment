import React from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps';

function Map() {
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
          defaultZoom={13}
        />
      ));
    return (
        <div>
        <GoogleMapExample
          containerElement={<div style={{ height: '500px', width: '500px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    );
  };
export default Map
