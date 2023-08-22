import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
    const info = localStorage.getItem("lastSearches")
    const [data, setData] = useState(null);
    const [city, setCity] = useState(info ? JSON.parse(info).length && JSON.parse(localStorage.getItem("lastSearches"))[JSON.parse(localStorage.getItem("lastSearches")).length - 1].city : "Jerusalem");
    const [isPending, setIsPending] = useState(true);
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)
    const [localStorageNum, setLocalStorageNum] = useState(0)
    const [current, setCurrent] = useState(null)

    return (
        <AppContext.Provider value={{ data, setData, weatherData, setWeatherData, isPending, setIsPending, city, setCity, error, setError, localStorageNum, setLocalStorageNum, current, setCurrent }}>
            {children}
        </AppContext.Provider>
    );
}
