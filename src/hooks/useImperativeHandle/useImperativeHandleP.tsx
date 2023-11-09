
import React, { useRef } from "react";
import { UseImperativeHandleC } from '../useImperativeHandle/useImperativeHandle';


export const ParentComponent = () => {
    const childRef = useRef<any>();

    const handleClick = () => {
        childRef.current.increment();
    };

    return (
        <>
            <UseImperativeHandleC ref={childRef} />
            <button onClick={handleClick}>Increment</button>
        </>
    );
};