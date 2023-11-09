/**
 * useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.
 * forwardRef API lets your component expose a DOM node to parent component with a ref.
 * By default, components don’t expose their DOM nodes to parent components. 
 * hook in React allows a child component to expose certain functions or properties to its parent component, 
 * giving the parent component more control over the child component. 
 *  It's typically used in situations where a parent component needs to interact with a child component directly, such as for form validation or handling of user input. 
 * When compared to useRef, useImperativeHandle allows for more direct interaction with child components.
 */

import React, { useImperativeHandle, useState, forwardRef } from "react";

export const UseImperativeHandleC = forwardRef<any>(
  function UseImperativeHandleC(props: any, ref: any) {
    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => ({
      increment() {
        setCount(count + 1);
      },
      getCount() {
        return count;
      }
    }));

    return <div>{count}</div>;
  }
);