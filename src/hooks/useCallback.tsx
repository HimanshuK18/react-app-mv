/*is a React Hook that lets you cache a function definition between re-renders.
The function value that you want to cache. On the initial render, the returned function you’ll get from useCallback will be the function you passed.

On the following renders, React will compare the dependencies with the dependencies you passed 
during the previous render. If none of the dependencies have changed (compared with Object.is), 
useCallback will return the same function as before. Otherwise, useCallback will return the 
function you passed on this render.
In other words, useCallback caches a function between re-renders until its dependencies change.
By default, when a component re-renders, React re-renders all of its children recursively.

If you’re writing a custom Hook, it’s recommended to wrap any functions that it returns into useCallback,
This ensures that the consumers of your Hook can optimize their own code when needed.
*/
import React, { useCallback, memo, useState, useEffect } from "react";
export default function ProductPage({ productId, referrer, theme }: { productId: string, referrer: string, theme: string }) {
    const [city, setCity] = useState("");
    const handleSubmit = useCallback((orderDetails: any) => {
        post('/product/' + productId + '/buy', {
            referrer,
            orderDetails,
        });
    }, [productId, referrer]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const createOptions = useCallback(() => {
        return {
          serverUrl: 'https://localhost:1234',
          roomId: productId
        };
      }, [productId]);

    useEffect(() => {
        const options = createOptions();
        console.log("i am ause effect" + JSON.stringify(options));
        return () => { }
    }, [createOptions]);


    return (
        <>
            <input name="cityp" value={city} onChange={(e) => { setCity(e.target.value) }} />
            <div className={theme}>
                <ShippingForm onSubmit={handleSubmit} />
            </div>
        </>);
}

function post(url: string, data: { referrer: string; orderDetails: any; }) {
    // Imagine this sends a request...
    console.log('POST /' + url);
    console.log(data);
}

const ShippingForm = memo(function ShippingForm({ onSubmit }: { onSubmit: any }) {
    const [count, setCount] = useState(1);

    console.log('[ARTIFICIALLY SLOW] Rendering <ShippingForm />');
    let startTime = performance.now();
    while (performance.now() - startTime < 500) {
        // Do nothing for 500 ms to emulate extremely slow code
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const orderDetails = {
            ...Object.fromEntries(formData),
            count
        };
        onSubmit(orderDetails);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p><b>Note: <code>ShippingForm</code> is artificially slowed down!</b></p>
            <label>
                Number of items:
                <button type="button" onClick={() => setCount(count - 1)}>–</button>
                {count}
                <button type="button" onClick={() => setCount(count + 1)}>+</button>
            </label>
            <label>
                Street:
                <input name="street" />
            </label>
            <label>
                City:
                <input name="city" />
            </label>
            <label>
                Postal code:
                <input name="zipCode" />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
});