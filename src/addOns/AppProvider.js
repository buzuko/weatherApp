import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [data, setData] = useState(null);
    const [city, setCity] = useState("Jerusalem");
    const [isPending, setIsPending] = useState(true);
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)
    const [soldiersData, setSoldiersData] = useState(null)
    const [newSoldiersData, setNewSoldiersData] = useState(null)
    const [selected, setSelected] = useState(soldiersData)
    const [isChanged, setIsChanged] = useState(false)
    const [isSaved, setIsSaved] = useState(false)


    return (
        <AppContext.Provider value={{
            data, setData, weatherData, setWeatherData, isPending, setIsPending,
            city, setCity, error, setError, soldiersData, setSoldiersData, selected, setSelected, isChanged, setIsChanged, isSaved, setIsSaved
        }}>
            {children}
        </AppContext.Provider>
    );
}
