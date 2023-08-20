import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [data, setData] = useState(null);
    const [city, setCity] = useState("Jerusalem");
    const [isPending, setIsPending] = useState(true);
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)

    return (
        <AppContext.Provider value={{ data, setData, weatherData, setWeatherData, isPending, setIsPending, city, setCity, error, setError }}>
            {children}
        </AppContext.Provider>
    );
}
