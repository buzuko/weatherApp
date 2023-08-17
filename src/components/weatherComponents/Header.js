import React, { useState, useContext } from "react";
import '../Weather.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from "../../addOns/AppProvider";

function Header() {
    const [selected, setSelected] = useState("")
    const { data, setData } = useContext(AppContext);
    console.log(data)
    return (
        <header className="Header">
            <h1>{"שלום " + data.First_Name + " " + data.Last_Name}</h1>
            <select className="header-select" value={selected} onChange={(e) => setSelected(e.target.value)}>
                <option value="Jerusalem">Jerusalem</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <button className="header-icon">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </header>
    )
}

export default Header;