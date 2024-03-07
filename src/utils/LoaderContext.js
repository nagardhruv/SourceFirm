import React, { useState, createContext } from 'react';

export const LoaderContext = createContext();

export default function LoaderContextProvider({ children }) {
    const [isLoaderOpen, setIsLoaderOpen] = useState(false);
    const toggalLoader = (value) => {
        setIsLoaderOpen(value);
    }
    return (
        <LoaderContext.Provider value={{ isLoaderOpen, toggalLoader }}>
            {children}
        </LoaderContext.Provider>
    )
}
