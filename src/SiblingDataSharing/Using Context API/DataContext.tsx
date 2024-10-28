import React, { createContext, useState } from 'react';

// @ts-ignore
export const DataContext = createContext<DataContextType | undefined>(undefined);

// @ts-ignore
export const DataProvider = ({ children }) => {
    const [data, setData] = useState('');
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};
