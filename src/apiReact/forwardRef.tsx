/**
 * forwardRef lets your component expose a DOM node to parent component with a ref.
 * Argument
 * 1. render: The render function for your component. React calls this function with the props and ref that your component received from its parent. 
 *    The JSX you return will be the output of your component. Pass the function compent an extart argument
 *     e.g 'refLable' pass this argument to the DOM node to be exposed.
 * 
 *  forwardRef returns a React component that you can render in JSX. 
 * Unlike React components defined as plain functions, a component returned by forwardRef is also able to receive a ref prop.
 * 
 * Use Cases
 * 1. Exposing a DOM node to the parent component:By default, each component’s DOM nodes are private. 
 *    However, sometimes it’s useful to expose a DOM node to the parent—To opt in, wrap your component definition into forwardRef()
 * 2. Instead of exposing an entire DOM node, you can expose a custom object, called an imperative handle, 
 *    with a more constrained set of methods. use the hook useImperativeHandle
 * 
 * 
 */

import React, { useRef, forwardRef } from 'react';

interface VideoPlayerProps {
  src: string;
  type: string;
  width: string;
}

const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  function VideoPlayer({ src, type, width }, videoRef) {
    return (
      <video width={width} ref={videoRef}>
        <source src={src} type={type} />
      </video>
    );
  }
);

export default function AppForwardRef() {
  const ref = useRef<HTMLVideoElement | null>(null);

  return (
    <>
      <button onClick={() => ref.current?.play()}>Play</button>
      <button onClick={() => ref.current?.pause()}>Pause</button>
      <br />
      <VideoPlayer
        ref={ref}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        type="video/mp4"
        width="250"
      />
    </>
  );
}

  