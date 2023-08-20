import React, { useState, useContext } from "react";
import '../Weather.css';
import sunny from "../../addOns/sunny.png"
import cloudy from "../../addOns/sunny.png"
import partly_cloudy from "../../addOns/partly_cloudy.png"
import rain_s_cloudy from "../../addOns/sunny.png"
import rainbow from "../../addOns/rainbow.png"

import imglyRemoveBackground from "@imgly/background-removal"
import { AppContext } from "../../addOns/AppProvider";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCloud } from '@fortawesome/free-solid-svg-icons';
// <FontAwesomeIcon icon={faCloud} />

function Body() {
    const { weatherData, city } = useContext(AppContext);

    const tempEve = weatherData.daily[0].temp.eve - 273.15
    const tempMax = weatherData.daily[0].temp.max - 273.15
    const temp = ((tempEve + tempMax) / 2).toFixed(2)
    let logo = ""
    if (weatherData.daily[0].temp.day - 273.15 > 29) {
        logo = sunny
    } else if (weatherData.daily[0].clouds > 20) {
        logo = partly_cloudy
    } else if (weatherData.daily[0].pop > 40) {
        logo = rain_s_cloudy
    } else {
        logo = rainbow
    }
    // imglyRemoveBackground(sun_no_background).then((blob) => {

    //     // The result is a blob encoded as PNG. It can be converted to an URL to be used as HTMLImage.src
    //     url = URL.createObjectURL(blob);
    // })


    return (
        <body className="body">
            <img src={logo} className="sun_no_background" alt="sun_no_background" />
            <div className="todayData">
                <h5>היום</h5>
                <h2>{city}</h2>
                <p>{"טמפרטורה" + ": " + temp + "\u00B0"}</p>
                <p>עינון</p>

            </div>
        </body>
    )
}

export default Body;