'use client';

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({})

export const GlobalContextProvider = ({ children }) => {
    const [color, setColor] = useState('red');

    return (
        <GlobalContext.Provider value={{ color, setColor }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);