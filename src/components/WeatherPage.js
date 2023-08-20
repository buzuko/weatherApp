import React, { useEffect, useState, useContext } from "react";
import Header from "./weatherComponents/Header";
import './Weather.css';
import Body from "./weatherComponents/body";
import Days from "./weatherComponents/days";
import { AppContext } from "../addOns/AppProvider";
import { useAllCities, useAllCities2 } from "../addOns/dataHooks";

function WeatherPage() {
    const { error, data, isPending2 } = useAllCities("getAllCities", false)
    const { isPending, weatherData, setWeatherData } = useContext(AppContext);


    return (
        <div className="WeatherPage">
            {data && !isPending2 && !error ? (
                <>
                    <Header
                        info={data}
                    />
                    {!isPending ?
                        <>
                            <Body /> {/* יש שגיעה שזה לא יכול להיות מתחת לדיב */}
                            <Days />
                        </>
                        :
                        <h1>Loading...</h1>
                    }
                </>
            ) : <h1>Loading...</h1>}
        </div>
    );
}

export default WeatherPage;