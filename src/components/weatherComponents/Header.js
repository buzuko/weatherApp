import React, { useState, useContext, useEffect } from "react";
import '../Weather.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from "../../addOns/AppProvider";
import { useAllCities } from "../../addOns/dataHooks";
import axios from "axios";

function Header(info) {
    const [selected, setSelected] = useState("Jerusalem")
    const [buttonSelect, setButtonSelect] = useState("Jerusalem")
    const { data, weatherData, setWeatherData, isPending, setCity } = useContext(AppContext);

    const { error, data: data2 } = useAllCities(`cities/${buttonSelect}`, true) //  כשזה טוען המסך עדיין מציג את הכל

    const cityOptions = info.info.map((res, index) => (
        <option key={index} value={res.city}>
            {res.city}
        </option>
    ));

    function serch() {
        setButtonSelect(selected)
    }
    return (
        <header className="Header">
            <h1>{"שלום " + data.First_Name + " " + data.Last_Name}</h1>
            {
                !isPending ?
                    <>
                        <select
                            className="header-select"
                            value={selected}
                            onChange={(e) => setSelected(e.target.value)}
                        >
                            {cityOptions}
                        </select>
                        <button onClick={serch} className="header-icon">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </>
                    :
                    <></>
            }
        </header>
    )
}

export default Header;