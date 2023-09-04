import React, { useState, useContext } from "react";
import '../Weather.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from "../../addOns/AppProvider";
import { useAllCities } from "../../addOns/weatherHooks";

function Header(info) {
    const info2 = localStorage.getItem("lastSearches")

    const [selected, setSelected] = useState(info2 ? JSON.parse(info2).length ? JSON.parse(info2)[JSON.parse(info2).length - 1].city : "Jerusalem" : "Jerusalem");
    const [buttonSelect, setButtonSelect] = useState(info2 ? JSON.parse(info2).length ? JSON.parse(info2)[JSON.parse(info2).length - 1].city : "Jerusalem" : "Jerusalem");
    const { data, isPending, setCurrent } = useContext(AppContext);
    const { } = useAllCities(`cities/${buttonSelect}`, true) //  כשזה טוען המסך עדיין מציג את הכל

    setCurrent(null)
    const cityOptions = info.info.map((res, index) => (
        <option key={index} value={res.city}>
            {res.city}
        </option>
    ));

    function search() {
        setButtonSelect(selected)
    }
    return (
        <header className="Header">
            <h1 style={{diretion: 'rtl'}}>{`שלום ${localStorage.getItem("fullName")}`}</h1>
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
                        <button onClick={search} className="header-icon">
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