import React, {createContext, useContext, useState} from 'react';
import menu from '../data/data'
const AppContext = createContext();

const AppProvider = ({children}) => {
    
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [menuData, setMenuData] = useState(menu)

    const toggleMenu = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return <AppContext.Provider value={{
        toggleMenu,
        sidebarOpen,
        menuData
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext};