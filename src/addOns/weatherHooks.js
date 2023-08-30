import { useState, useEffect, useContext } from "react";
import axios from "axios"
import { AppContext } from "../addOns/AppProvider";


// מביא את המידע מהסרבר
export function useAllCities(URL, bool) {
    const [isPending2, setIsPending2] = useState(true)
    const [data, setData] = useState(null)
    const { current, setWeatherData, setIsPending, setCity, setError, setLocalStorageNum } = useContext(AppContext);

    useEffect(() => {
        if (current) {
            setWeatherData(current)
            setCity(JSON.parse(localStorage.getItem("lastSearches"))[JSON.parse(localStorage.getItem("lastSearches")).length - 1].city)
            setData(JSON.parse(localStorage.getItem("allCountry")))
            setIsPending2(false)
        } else {
            console.log("here")
            bool ? setIsPending(true) : setIsPending2(true)
            const timerId = setTimeout(async () => {

                try {
                    const res = await axios(`http://localhost:3001/${URL}`, {
                        headers: {
                            user_mispar_ishi: localStorage.getItem("password"),
                            user_name: localStorage.getItem("userName"),
                        }
                    })
                    !bool && localStorage.setItem("allCountry", JSON.stringify(res.data))
                    setData(res.data);
                    bool && setCity(URL.split("/")[1])
                    bool ? setIsPending(false) : setIsPending2(false)

                    // מביא את הנתונים של העיר לפי לט ולונג
                    if (bool) {
                        setIsPending(true)
                        async function fetchData() {
                            try {
                                const res2 = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.latitude}&lon=${res.data.longitude}&appid=6f11fa9760902e1597265ad205f05d2c`);
                                setWeatherData(res2.data)
                                varifySearched2(res2.data)
                                varifySearched(URL, true)

                                setLocalStorageNum(JSON.parse(localStorage.getItem('lastSearches')).length)
                                setIsPending(false)
                            } catch (error) {
                                setError(error.message);
                                setIsPending(false)
                            }
                        }
                        fetchData();
                    }
                } catch (error) {
                    setError(error.message);
                    bool ? setIsPending(false) : setIsPending2(false)
                }
            }, 100);
            return () => {
                clearTimeout(timerId);
            }
        }
        bool && setIsPending(false)
    }, [URL]);
    return { data, isPending2 };

}

// שומר את המקומות האחרונים
function varifySearched(URL) {
    const storedCityString = JSON.parse(localStorage.getItem('allCountry'));
    const storedArrayString = localStorage.getItem('lastSearches');
    const lastSearches = storedArrayString ? JSON.parse(storedArrayString) : [];

    let i = -1
    let i2 = -1
    storedCityString.map((element, index) => {
        if (element.city === URL.split("/")[1]) {
            i2 = index
            lastSearches[0] && lastSearches.map((element, index) => {
                if (element.city === URL.split("/")[1])
                    i = index
            })
        }
    })

    i !== -1 && lastSearches.splice(i, 1);

    if (lastSearches.length < process.env.REACT_APP_MAX) {
        lastSearches.push(storedCityString[i2]);
        localStorage.setItem('lastSearches', JSON.stringify(lastSearches));
    }
    else {
        lastSearches.shift();
        lastSearches.push(storedCityString[i2]);
        localStorage.setItem("lastSearches", JSON.stringify(lastSearches))
    }
}

function varifySearched2(res) {
    const storedArrayString = localStorage.getItem('weatherData');
    const lastSearches = storedArrayString ? JSON.parse(storedArrayString) : [];

    let i = -1
    lastSearches.length && lastSearches.map((element, index) => {
        if (element.lat === res.lat && element.lon === res.lon) {
            i = index
        }
    })
    i !== -1 && lastSearches.splice(i, 1);



    if (lastSearches.length < process.env.REACT_APP_MAX) {
        lastSearches.push(res);
        localStorage.setItem('weatherData', JSON.stringify(lastSearches));

    }
    else {
        lastSearches.shift();
        lastSearches.push(res);
        localStorage.setItem("weatherData", JSON.stringify(lastSearches))
    }

}