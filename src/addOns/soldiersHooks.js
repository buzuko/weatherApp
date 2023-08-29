import { useState, useEffect, useContext } from "react";
import axios from "axios"
import { AppContext } from "../addOns/AppProvider";


// מביא את המידע מהסרבר
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
                setIsPending2(false)
                if (bool) {
                    async function fetchData() {
                        try {
                            const res2 = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.latitude}&lon=${res.data.longitude}&appid=6f11fa9760902e1597265ad205f05d2c`);
                            setWeatherData(res2.data)
                            varifySearched(res2.data)
                            setIsPending(false)
                        } catch (error) {
                            setIsPending(false)
                            setError(error.message);
                        }
                    }

                    fetchData();
                }
            } catch (error) {
                setError(error.message);
                bool ? setIsPending(false) : setIsPending2(false)
            }
        }, 1000);
        return () => {
            clearTimeout(timerId);
        }

    }, [URL]);
    return { data, isPending2 };
}

// שומר את המקומות האחרונים
function varifySearched(res) {
    const storedArrayString = localStorage.getItem('lastSearches');
    const lastSearches = storedArrayString ? JSON.parse(storedArrayString) : [];

    let i = -1
    lastSearches.map((element, index) => {
        if (element.timezone === res.timezone)
            i = index
    })
    i !== -1 && lastSearches.splice(i, 1);

    if (lastSearches.length < process.env.REACT_APP_MAX) {
        lastSearches.push(res);
        localStorage.setItem('lastSearches', JSON.stringify(lastSearches));
    }
    else {
        lastSearches.shift();
        lastSearches.push(res);
        localStorage.setItem("lastSearches", JSON.stringify(lastSearches))
    }
}