import { useState, useEffect, useContext } from "react";
import axios from "axios"
import { AppContext } from "../addOns/AppProvider";

export function useAllCities(URL, bool) {
    const [isPending2, setIsPending2] = useState(true)
    const [data, setData] = useState(null)
    const { setWeatherData, setIsPending, setCity, setError } = useContext(AppContext);

    useEffect(() => {
        bool ? setIsPending(true) : setIsPending2(true)
        const timerId = setTimeout(async () => {

            try {
                const res = await axios(`http://localhost:3001/${URL}`, {
                    headers: {
                        user_mispar_ishi: localStorage.getItem("password"),
                        user_name: localStorage.getItem("userName"),
                    }
                })
                setData(res.data);
                bool && setCity(URL.split("/")[1])

                if (bool) {
                    async function fetchData() {
                        try {
                            const res2 = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.latitude}&lon=${res.data.longitude}&appid=6f11fa9760902e1597265ad205f05d2c`);
                            setWeatherData(res2.data)
                            bool ? setIsPending(false) : setIsPending2(false)
                        } catch (error) {
                            setError(error.message);
                        }
                    }

                    fetchData();
                }
            } catch (error) {
                setError(error.message);
                bool ? setIsPending(false) : setIsPending2(false)
            }
        }, 3000);
        return () => {
            clearTimeout(timerId);
        }

    }, [URL]);
    return { data };
}