import React, { useEffect, useState, useContext, ChangeEvent } from 'react';

export const Controls: React.FC = () => {
    const countries = [
        { name: "India", cities: ["Delhi", "Mumbai", "Faridabad"] },
        { name: "USA", cities: ["New York", "LA", "SA"] },
        { name: "AUS", cities: ["Melbourne", "Sudney", "Hobart"] },
        { name: "UK", cities: ["London", "Manchester", "Hule"] },]
    const [textValue, setTextValue] = useState("hello");
    const [textValue2, setTextValue2] = useState("yellow");
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedOptionText, setSelectedOptionText] = useState("");
    const [cities, setCities] =  useState<string[]>([]);

    function handleTextValue(event: ChangeEvent<HTMLInputElement>) {
        setTextValue(event.target.value)
    }
    function handleDDLSelect(event: ChangeEvent<HTMLSelectElement>){
           setSelectedOption(event.target.value);
           setSelectedOptionText(event.target.options[event.target.selectedIndex].text);
           const cities = countries[parseInt(event.target.value)].cities;
           setCities(cities);
    }
    return (<>
        <div style={{ height: 100, width: '90%' }}>
            <input type="text" value={textValue}
                onChange={handleTextValue}></input>
            <input type="text" value={textValue2}
                onChange={(event) => { setTextValue2(event.target.value) }}></input>
        </div>
        <div style={{ height: 100, width: '90%' }}>
            <input type="button" value="button" />
            <input type="checkbox" />
            <input type="color" />
            <input type="date" />
            <input type="datetime-local" />
            <input type="email" />
            <input type="file" />
            <input type="hidden" />
            <input type="image" alt="some image" />
            <input type="month" />
            <input type="number" />
            <input type="password" />
            <input type="radio" />
            <input type="range" />
            <input type="reset" />
            <input type="search" />
            <input type="submit" />
            <input type="tel" />
            <input type="text" />
            <input type="time" />
            <input type="url" />
            <input type="week" />
        </div>
        <div style={{ height: 100, width: '90%' }}>
            <label htmlFor="dropdown">Select an option:</label>
            <select id="dropdown" value={selectedOption} onChange={handleDDLSelect}>
                <option value="">Select an option</option>
                {countries.map((option, index) => (
                    <option key={index} value={index}>
                        {option.name}
                    </option>
                ))}
            </select>
            <p>Selected option: {selectedOptionText}</p>
            <select id="cites">
                <option value="">Select A city</option>
                {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
                ))}
            </select>
            <select id="someddl">
                <option value="1">Home</option>
                <option value="2">Remote</option>
                <option value="3">Office</option>
                <option value="4">Hybird</option>
                </select> 
        </div>

    </>);
}

