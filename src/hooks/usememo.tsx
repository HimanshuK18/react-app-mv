/**
* s a React Hook that lets you cache the result of a calculation between re-renders.
* On the initial render, the value you’ll get from useMemo will be the result of calling your calculation.
*  On every subsequent render, React will compare the dependencies with the dependencies you passed
* during the last render. If none of the dependencies have changed (compared with Object.is), 
* useMemo will return the value you already calculated before. Otherwise, React will re-run your 
* calculation and return the new value.
* Arguments
* 1. A calculation function that takes no arguments, like () =>, and returns what you wanted to calculate.
* 2. A list of dependencies including every value within your component that’s used inside your calculation.
* 
* Use cases
* 1. keep expensive calculations in memory and save time 
* 2. Stops re-render of the child component, if the child is wrap in a memo and the props do not 
     change for the child
  3. Memoizing a dependency of another Hook.

*/

import { setgroups } from 'process';
import React, { useState, useDeferredValue, useMemo } from 'react';
import './style.css';

export function UseMemo() {
    const [name, setName] = useState('');
    const [nameIs, setNameIs] = useState('');
    const [ageIs, setAgeIS] = useState('');
    const [genderIs, setGenderIs] = useState('');
    const deferredName = useDeferredValue(name);

    const gender = ["Male", "Female", "Other"];
    const list = useMemo(() => {
        return largeList.filter((item: any) => item.name.includes(deferredName))
    }, [deferredName])

    function handleChange(e: any) {
        setName(e.target.value)
    }
    function saveData(e: React.FormEvent) {
        e.preventDefault();//is a method used to prevent the default behavior of an event in a web browser.
        alert('yes');
        setName('');
        setAgeIS('');
        setGenderIs('');
    }

    return (
        <>
        <div className='grid-container'>
            <div className='grid-item'><input type='text' value={name} onChange={handleChange} />
                {list.map((item: any) => (
                    <div>{item.name}</div>
                ))}</div>
            <div className='grid-item'>
                <form className='formStyle' onSubmit={saveData}>
                    <div className='divCenter'>
                        <div className="row">
                            <label htmlFor='name'> Give your name</label>
                            <input type='text' value={nameIs} id='name' onChange={(e) => { setNameIs(e.target.value) }} required></input>
                        </div>
                        <div className="row">
                            <label htmlFor='age'> Give your Age</label>
                            <input type='number' value={ageIs} id='age' onChange={(e) => { setAgeIS(e.target.value) }} required></input>
                        </div>
                        <div className="row">
                            <label htmlFor='gender'> Give your Gender</label>
                            <select id='gender' value={genderIs} onChange={(e) => { setGenderIs(e.target.value) }} required>
                                <option value='selectg' key='selectg'>Select Gender</option>
                                {gender.map((option, index) => (
                                    <option key={index + 'gender'} value={index}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="row">
                            <button aria-label="Save the Data" type='submit'> Save</button>
                            <button type='reset' > Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        </>
    )
}

const largeList = [{ name: 'aduil' }, { name: 'sdas' },
{ name: 'ascduil' }, { name: 'fsdf' },
{ name: 'adfuil' }, { name: 'sdf' },
{ name: 'adujil' }, { name: 'fsdf' },
{ name: 'agduil' }, { name: 'sdsdfas' },
{ name: 'adubil' }, { name: 'sdsdfsdas' },
{ name: 'adfuil' }, { name: 'sdfsf' },
{ name: 'pduil' }, { name: 'ghps' },
{ name: 'pscduil' }, { name: 'fghf' },
{ name: 'pdfuil' }, { name: 'ghf' },
{ name: 'pdujil' }, { name: 'fghf' },
{ name: 'pgduil' }, { name: 'ghghfps' },
{ name: 'pdubil' }, { name: 'ghghfghps' },
{ name: 'pdfuil' }, { name: 'ghfsf' },
{ name: 'zscdukw' }, { name: 'fsdf' },
{ name: 'zdfukw' }, { name: 'tdf' },
{ name: 'zdujkw' }, { name: 'fsdf' },
{ name: 'zgdukw' }, { name: 'tdsdfas' },
{ name: 'zduvkw' }, { name: 'tdsdfsdas' },
{ name: 'zdfukw' }, { name: 'tdfsf' },
{ name: 'jdukw' }, { name: 'ghps' },
{ name: 'jscdukw' }, { name: 'fghf' },
{ name: 'jdfukw' }, { name: 'ghf' },
{ name: 'jdujkw' }, { name: 'fghf' },
{ name: 'jgdukw' }, { name: 'ghghfps' },
{ name: 'jduvkw' }, { name: 'ghghfghps' },
{ name: 'jdfukw' }, { name: 'ghfsf' }];