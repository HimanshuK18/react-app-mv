import React, { CSSProperties } from 'react';

export type MarkerProps = {
    lat: number;
    lng: number;
    text: string;
    username: string;
    markerType: 'currentType' | 'noteType';

}

const Marker: React.FC<MarkerProps> = ({ text, username, markerType }) => {
    const circleStyleCurrent: CSSProperties = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'blue',
        opacity: 0.55
    };

    const noteStyle: CSSProperties = {
        position: "absolute",
        transform: "translate(-50%, -50%)",
        background: "white",
        color: "black",
        fontWeight: "bold",
        display: "inline-block",
        padding: "10px",
        borderRadius: "5px",
        boxSizing: "border-box",
    };

    return (<>
        <div data-testid='current-map-marker'>
            {markerType === 'currentType' ? (
                <div style={circleStyleCurrent}>
                </div>
            ) : (
                <div data-testid='note-map-marker'
                    style={noteStyle}
                    title={`username- ${username}note- ${text}`}>
                    {username}<br/>Note: {text}
                </div>
            )}
-        </div>
    </>);
}

export default Marker;