/**
 * useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
 * Arguments.
 * 1. setup: The function with your Effect’s logic. Your setup function may also optionally return a cleanup 
 *   function. Before your component is added to the DOM, React will run your setup function.
 *   After every re-render with changed dependencies, React will first run the cleanup function with the old values, 
 *   and then run your setup function with the new values
 * 2. dependencies: The list of all reactive values referenced inside of the setup code. 
 *   Reactive values include props, state, and all the variables and functions declared directly inside your component body.
 * 
 * React guarantees that the code inside useLayoutEffect and any state updates scheduled inside it will be 
 * processed before the browser repaints the screen. This lets you render the tooltip, measure it, and re-render 
 * the tooltip again without the user noticing the first extra render. In other words, useLayoutEffect blocks the
 * browser from painting.
 * 
 */
import React, {useState, useLayoutEffect, useRef} from 'react';
import { createPortal } from 'react-dom';

export default function UseLayoutEffect() {
    return (
        <div>
            <ButtonWithTooltip
                tooltipContent={
                    <div>
                        This tooltip does not fit above the button.
                        <br />
                        This is why it's displayed below instead!
                    </div>
                }
            >
                Hover over me (tooltip above)
            </ButtonWithTooltip>
            <div style={{ height: 50 }} />
            <ButtonWithTooltip
                tooltipContent={
                    <div>This tooltip fits above the button
                        <br />
                        This is why it's displayed below instead!
                    </div>
                    
                }
            >
                Hover over me (tooltip below)
            </ButtonWithTooltip>
            <div style={{ height: 50 }} />
            <ButtonWithTooltip
                tooltipContent={
                    <div>This tooltip fits above the button</div>
                }
            >
                Hover over me (tooltip below)
            </ButtonWithTooltip>
        </div>
    );
}

function ButtonWithTooltip({ tooltipContent, children,  }: { tooltipContent:any, children:any }) {
    const [targetRect, setTargetRect] = useState<any>(null);
    const buttonRef: any = useRef(null);
    return (
      <>
        <button
          {...children}
          ref={buttonRef}
          onPointerEnter={() => {
            const rect = buttonRef.current.getBoundingClientRect();
            setTargetRect({
              left: rect.left,
              top: rect.top,
              right: rect.right,
              bottom: rect.bottom,
            });
          }}
          onPointerLeave={() => {
            setTargetRect(null);
          }}
        />
        {targetRect !== null && (
          <Tooltip targetRect={targetRect}>
            {tooltipContent}
          </Tooltip>
        )
      }
      </>
    );
  }

  function Tooltip({ children, targetRect }: { children:any, targetRect: any }) {
    const ref: any = useRef(null);
    const [tooltipHeight, setTooltipHeight] = useState(0);
  
    useLayoutEffect(() => {
      const { height } = ref.current.getBoundingClientRect();
      setTooltipHeight(height);
    }, []);
  
    let tooltipX = 0;
    let tooltipY = 0;
    if (targetRect !== null) {
      tooltipX = targetRect.left;
      tooltipY = targetRect.top - tooltipHeight;
      if (tooltipY < 0) {
        // It doesn't fit above, so place below.
        tooltipY = targetRect.bottom;
      }
    }
  
    return createPortal(
      <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
        {children}
      </TooltipContainer>,
      document.body
    );
  }

  function TooltipContainer({ children, x, y, contentRef }:{ children: any, x: any, y: any, contentRef: any }) {
    return (
      <div
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          left: 0,
          top: 0,
          transform: `translate3d(${x}px, ${y}px, 0)`
        }}
      >
        <div ref={contentRef} className="tooltip">
          {children}
        </div>
      </div>
    );
  }