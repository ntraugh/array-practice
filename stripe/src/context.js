import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

// ALWAYS DESTRUCTURE CHILDREN
const AppProvider = ({children}) => {
    const [submenuOpen, setSubmenuOpen] = useState(true)
    const [sidebarOpen, setSidebarOpen] = useState(true)

    const openSidebar = () => {
        setSidebarOpen(true)
    }
    const closeSidebar = () => {
        setSidebarOpen(false)
    }
    const openSubmenu = () => {
        setSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setSubmenuOpen(false)
    }

    // don't forget to return the AppContext.Provider or else you won't see anything on your page.
    return <AppContext.Provider value={
        {
            submenuOpen,
            sidebarOpen,
            openSidebar,
            closeSidebar,
            openSubmenu,
            closeSubmenu,
        }
    }>
        {children}
    </AppContext.Provider>
}

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext}