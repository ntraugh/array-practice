import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

// ALWAYS PASS IN CHILDREN INTO THE PROPS HERE
const AppProvider = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    
    
    const openSidebar = () => {
        setSidebarOpen(true)
    }

    const closeSidebar = () => {
        setSidebarOpen(false)
    }

    return <AppContext.Provider value="hello">{children}</AppContext.Provider>
}

// custom hook to export to our components. NEEDS TO START WITH ***use***
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}