"use client";
import React, { useEffect, useState, useContext } from 'react';
import MapComponent from './map/map';
import { ErrorBoundary } from "react-error-boundary";
import { NotesContext } from './state/noteState';
import MyFallbackComponent from './error/errorFallBack';

const App: React.FC = () => {
  let [currentLocation, setCurrentLocation] = useState({
    lat: 0,
    lng: 0
  });
  const logErrorToService = (error: any, info: any) => {
    console.log("this erro posted by me " + error, info);
  }
  const { notesSaved } = useContext(NotesContext);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation(prevState => ({
            ...prevState,
            lat: latitude,
            lng: longitude,
          }));
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);
  return (<>
    <title>Landmark Remark</title>
      <ErrorBoundary
        FallbackComponent={MyFallbackComponent}
        onReset={() => {
          // reset the state of your app here
        }}
        resetKeys={['someKey']}
        onError={logErrorToService}
      >
        <div style={{ height: "100%", width: "100%" }} data-testid='map-component'>
          <MapComponent notes={notesSaved} currentLocation={currentLocation}></MapComponent>
        </div>
      </ErrorBoundary>
  </>);
}

export default App;