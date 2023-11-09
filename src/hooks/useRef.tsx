/**
 * useRef is a React Hook that lets you reference a value that’s not needed for rendering.
 * It can also be used to access a DOM element directly.
 * 
 * useRef returns an object with a single property:

current: Initially, it’s set to the initialValue you have passed. 
You can later set it to something else. If you pass the ref object to React as a ref attribute to
 a JSX node, React will set its current property.
 * Use case 2
 * It’s particularly common to use a ref to manipulate the, the example below is for DOM manupulation
 * 1. declare a ref object with an initial value of null: 
 *     const inputRef = useRef(null);
 * 2. Then pass your ref object as the ref attribute to the JSX of the DOM node you want to manipulate:
 *    return <input ref={inputRef} />;
 * 3. After React creates the DOM node and puts it on the screen, React will set the current property of your ref object to that DOM node. Now you can access the <input>’s DOM node and call methods like focus()
 *    inputRef.current.focus();
 * 
 * Use case 3 
 * forwardRef API lets your component expose a DOM node to parent component with a ref and useRef.
 */

import React from 'react';
import { useRef } from 'react';

export default function UseRef() {
  const inputRef: any = useRef(null);
  function handleClick() {
    inputRef?.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}