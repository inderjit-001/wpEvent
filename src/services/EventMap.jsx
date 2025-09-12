import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function EventMap({ placeName }) {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const apiKey = 'AIzaSyDzh8-GocyaUY-Y1vg21IVA5M0vx6RuqI8';
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          placeName
        )}&key=${apiKey}`
      );

      const data = await response.json();
      if (data.status === 'OK' && data.results.length > 0) {
        const location = data.results[0].geometry.location;
        setCoords(location);
      } else {
        console.error('Geocoding failed:', data.status);
      }
    };

    fetchCoordinates();
  }, [placeName]);

  const containerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '8px',
  };

  return (
    <div>
      {!coords ? (
        <p>Loading map...</p>
      ) : (
        <LoadScript googleMapsApiKey="AIzaSyDzh8-GocyaUY-Y1vg21IVA5M0vx6RuqI8">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={coords}
            zoom={14}
          >
            <Marker position={coords} />
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
}

export default EventMap;
