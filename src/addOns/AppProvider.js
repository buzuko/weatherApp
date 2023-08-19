import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [weatherData, setWeatherData] = useState(null)
    return (
        <AppContext.Provider value={{ data, setData, weatherData, setWeatherData, isPending, setIsPending }}>
            {children}
        </AppContext.Provider>
    );
}
