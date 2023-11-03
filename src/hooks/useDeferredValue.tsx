/**
 * useDeferredValue is a React Hook that lets you defer updating a part of the UI.
 *  implementing a delay before some information is calculated.
 * During the initial render, the returned deferred value will be the same as the value you provided. 
 * During updates, React will first attempt a re-render with the old value (so it will return the old value), 
 * and then try another re-render in background with the new value (so it will return the updated value).
 * 
 * 
 * This hook will then return a value which will be the deferred version of the value you pass in. 
 * This means that when our name variable changes the deferredName will still stay the same since 
 * useDeferredValue will not immediately update the value of the deferredName. This allows time for our 
 * component to completely rerender with the new name value since our list will not try to update itself
 *  as it is waiting for the deferredName to change. This makes the app feel more responsive since the 
 * input will update immediately while the list will be delayed in its update.
 * 
 * 
 * This means that if we change the name our deferredName will wait to update until after the UI has had
 *  time to update with the new name value in the input field. If we continue to change our input in a 
 * short period of time (for example by typing quickly in the input) the deferredName value will 
 * continue to stay unchanged and our list will not update. The only thing that will update is the name 
 * variable until there is a pause in the name value changing. Once we stop typing then React will 
 * update the deferredName value with the most recent name value and rerender the list.
 */
import React, { useState, useDeferredValue, useMemo } from 'react';

export function UseDeferredValue() {
    const [name, setName] = useState("");
    const deferredName = useDeferredValue(name);

    const list = useMemo(() => {
        return largeList.filter((item: any) => item.name.includes(deferredName))
    }, [deferredName])

    function handleChange(e: any) {
        setName(e.target.value)
    }

    return (
        <>
            <input type="text" value={name} onChange={handleChange} />
            {list.map((item: any) => (
                <div>{item.name}</div>
            ))}
        </>
    )
}

const largeList = [{ name: "aduil" }, { name: "sdas" },
{ name: "ascduil" }, { name: "fsdf" },
{ name: "adfuil" }, { name: "sdf" },
{ name: "adujil" }, { name: "fsdf" },
{ name: "agduil" }, { name: "sdsdfas" },
{ name: "adubil" }, { name: "sdsdfsdas" },
{ name: "adfuil" }, { name: "sdfsf" },
{ name: "pduil" }, { name: "ghps" },
{ name: "pscduil" }, { name: "fghf" },
{ name: "pdfuil" }, { name: "ghf" },
{ name: "pdujil" }, { name: "fghf" },
{ name: "pgduil" }, { name: "ghghfps" },
{ name: "pdubil" }, { name: "ghghfghps" },
{ name: "pdfuil" }, { name: "ghfsf" }];