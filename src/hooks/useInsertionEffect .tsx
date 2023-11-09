/**
 * 
 * useInsertionEffect is for CSS-in-JS library authors. Unless you are working on a CSS-in-JS
 *  library and need a place to inject the styles, you probably want useEffect or useLayoutEffect 
 * instead.
 * allows inserting elements into the DOM before any layout effects fire.
 * hook offers a unique and intuitive way to handle DOM insertion operations. With useInsertionEffect, developers gain the ability to perform 
 * actions immediately after an element has been inserted into the DOM. 
 * 
 * The useInsertionEffect hook takes two parameters: a callback function and a dependency array. 
 * The callback function is executed after the component's element is inserted into the DOM. 
 * The dependency array is optional and allows you to specify dependencies for the hook, similar to other React hooks.
 */

import React, { useInsertionEffect, useRef } from 'react';
export const MyComponentInsertionEffect = () => {
    const labelRef = useRef(null);
    useInsertionEffect(() => {
        const labelElement: any  = labelRef.current;
        labelElement.textContent = 'NewLabel';
        labelElement.style.color = 'red';
      }, []);
    
      return (
        <div>
          <label ref={labelRef}></label>
        </div>
      );
};
export default MyComponentInsertionEffect;