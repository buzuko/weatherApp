import React, { useEffect, useContext, useRef } from "react";
import '../Weather.css';
import { LogoIcon, weatherColor } from "../../addOns/daysTemp";
import { AppContext } from "../../addOns/AppProvider";

function Body() {
    const { weatherData, city } = useContext(AppContext);

    const { logo, temp } = LogoIcon(weatherData, 0)
    const color = weatherColor(weatherData.daily[0])
    const colorRef = useRef(null);

    useEffect(() => {
        colorRef.current.style.background = color;
    }, [color]);

    return (
        <div className="body" ref={colorRef}>
            <img src={logo} className="sun_no_background" alt="sun_no_background" />
            <div className="todayData">
                <h5>היום</h5>
                <h2>{city}</h2>
                <p>{"טמפרטורה" + ": " + temp + "\u00B0"}</p>
                <p>עינון</p>

            </div>
        </div>
    )
}

export default Body;