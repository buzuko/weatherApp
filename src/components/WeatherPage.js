import React from "react";
import Header from "./weatherComponents/Header";
import './Weather.css';
import Body from "./weatherComponents/body";
import Days from "./weatherComponents/days";
import cloudIMJ from '../cloudIMJ.jpg';



function WeatherPage() {
    return (
        <div className="WeatherPage">
            <Header />
            <Body />
            <Days />
        </div>
    )
}

export default WeatherPage;