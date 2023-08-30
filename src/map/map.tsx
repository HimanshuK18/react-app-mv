import React, { useState } from 'react';
import GoogleMapReact from "google-map-react";
import { Note } from '../note/Note';
import NoteAddComponent from '../noteAdd/Note';
import Marker from '../marker/Marker';
import SearchComponent from '../search/SearchNote';
import { useErrorBoundary } from "react-error-boundary";
import './Map.css';



interface MapComponentProps {
    notes: Note[];
    currentLocation: { lat: number; lng: number };
}

const MapComponent: React.FC<MapComponentProps> = ({
    notes,
    currentLocation
}) => {
    const { showBoundary } = useErrorBoundary();
    const [open, setOpen] = useState(false);
    const addnew = () => {
        setOpen(true);
    };
    const closeDialog = () => {
        setOpen(false);
    }
    const showError = () => {
        showBoundary("i am the error");
    }

    return (
        <div className='container' data-testid='map-component'>
            <div style={{ height: "100vh", width: "75%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCgV456R6PGFuq28XFrbCnzU0r7vR54ANU" }}
                    center={currentLocation}
                    defaultZoom={11}
                >
                    <Marker
                        key={3}
                        lat={currentLocation.lat}
                        lng={currentLocation.lng}
                        text={""}
                        username={""}
                        markerType={"currentType"}
                    />

                    {notes.map((note) => (
                        <Marker
                            key={note.id}
                            lat={note.lat}
                            lng={note.lng}
                            text={note.note}
                            username={note.username}
                            markerType={"noteType"}
                        />
                    ))}

                </GoogleMapReact></div>
            <div style={{ height: "100vh", width: "25%" }}>
                <div data-testid="search-component">
                    <SearchComponent></SearchComponent></div>
                <div data-testid="add-note-button">
                    <button onClick={addnew}>Add Note</button>
                </div>
                <div data-testid="add-note-button">
                    <button onClick={showError}>Error Fallback</button>
                </div>
                <NoteAddComponent close={closeDialog} lat={currentLocation.lat} lng={currentLocation.lng} Opened={open}></NoteAddComponent>
            </div>
        </div>
    );
};

export default MapComponent;