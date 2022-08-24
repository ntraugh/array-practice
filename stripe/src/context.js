import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

// ALWAYS DESTRUCTURE CHILDREN
const appProvider = ({children}) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)

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

    <AppContext.Provider value={}>
        {children}
    </AppContext.Provider>
}