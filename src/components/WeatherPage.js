import React, { useEffect, useState, useContext } from "react";
import Header from "./weatherComponents/Header";
import './Weather.css';
import Body from "./weatherComponents/body";
import Days from "./weatherComponents/days";
import { AppContext } from "../addOns/AppProvider";
import { useAllCities, useAllCities2 } from "../addOns/dataHooks";

function WeatherPage() {
    const { error, data } = useAllCities("getAllCities")
    const { isPending, weatherData, setWeatherData } = useContext(AppContext);

    //const { error: error2, isPending: isPending2, data: data2 } = useAllCities()
    //console.log(data2)

    return (
        <div className="WeatherPage">
            {data && !isPending && !error ? (
                <>
                    <Header
                        info={data}
                    />
                    <Body /> {/* יש שגיעה שזה לא יכול להיות מתחת לדיב */}
                    <Days />
                </>
            ) : <h1>...Loading</h1>}
        </div>
    );
}

export default WeatherPage;