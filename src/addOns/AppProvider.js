import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [data, setData] = useState(null);
    const [city, setCity] = useState("Jerusalem");
    const [isPending, setIsPending] = useState(true);
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)
    const [soldiersData, setSoldiersData] = useState(null)

    return (
        <AppContext.Provider value={{ data, setData, weatherData, setWeatherData, isPending, setIsPending, city, setCity, error, setError, soldiersData, setSoldiersData }}>
            {children}
        </AppContext.Provider>
    );
}
