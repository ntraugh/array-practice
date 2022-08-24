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
    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    return <AppContext.Provider value={
        {
            modalOpen, 
            sidebarOpen, 
            openModal, 
            closeModal, 
            closeSidebar, 
            openSidebar}}>
                {children}
            </AppContext.Provider>
}

// custom hook to export to our components. NEEDS TO START WITH ***use***
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}