import React, { useContext } from "react";
import Header from "./weatherComponents/Header";
import './Weather.css';
import Body from "./weatherComponents/body";
import Days from "./weatherComponents/days";
import { AppContext } from "../addOns/AppProvider";
import { useAllCities } from "../addOns/dataHooks";

function WeatherPage() {
    const { data, isPending2 } = useAllCities("getAllCities", false)
    const { isPending, error } = useContext(AppContext);


    return (
        <div className="WeatherPage">
            {!error ?
                <>
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
                </>
                :
                <h1>{error}</h1>
            }
        </div>
    );
}

export default WeatherPage;