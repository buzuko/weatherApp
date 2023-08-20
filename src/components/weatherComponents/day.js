import { React, useState, useContext } from "react";
import '../Weather.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from "../../addOns/AppProvider";
import sunny from "../../addOns/sunny.png"
import cloudy from "../../addOns/sunny.png"
import partly_cloudy from "../../addOns/partly_cloudy.png"
import rain_s_cloudy from "../../addOns/sunny.png"
import rainbow from "../../addOns/rainbow.png"


//<FontAwesomeIcon icon={faCloud} />

function Day({ time, num }) {
    const { weatherData } = useContext(AppContext);

    const tempEve = weatherData.daily[num].temp.eve - 273.15
    const tempMax = weatherData.daily[num].temp.max - 273.15
    const temp = ((tempEve + tempMax) / 2).toFixed(2)

    let logo;
    if (weatherData.daily[num].temp.day - 273.15 > 29) {
        logo = sunny
    } else if (weatherData.daily[num].clouds > 20) {
        logo = partly_cloudy
    } else if (weatherData.daily[num].pop > 40) {
        logo = rain_s_cloudy
    } else {
        logo = rainbow
    }

    return (
        <body className="Day">
            <div className="dayData">
                <h5>{time}</h5>
                <img src={logo} className="dayLogo" alt="dayLogo" />
                <p>{temp + "\u00B0" + "C"}</p>

            </div>
        </body>
    )
}

export default Day;