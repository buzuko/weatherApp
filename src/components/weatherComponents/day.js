import { React, useEffect, useContext, useRef } from "react";
import '../Weather.css';
import { AppContext } from "../../addOns/AppProvider";
import { LogoIcon, weatherColor } from "../../addOns/daysTemp";

function Day({ time, num }) {
    const { weatherData } = useContext(AppContext);
    const { logo, temp } = LogoIcon(weatherData, num)
    const color = weatherColor(weatherData.daily[num])
    const colorRef = useRef(null);

    useEffect(() => {
        colorRef.current.style.background = color;
    }, [color]);

    return (
        <div className="Day" ref={colorRef}>
            <div className="dayData">
                <h5>{time}</h5>
                <img src={logo} className="dayLogo" alt="dayLogo" />
                <p>{temp + "\u00B0" + "C"}</p>

            </div>
        </div>
    )
}

export default Day;