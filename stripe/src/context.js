import React, { useState, useContext } from 'react'
import sublinks from './data'
import Navbar from './Navbar'

const AppContext = React.createContext()

// ALWAYS DESTRUCTURE CHILDREN
const AppProvider = ({children}) => {
    const [submenuOpen, setSubmenuOpen] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({ page: "", links: []})

    const openSidebar = () => {
        setSidebarOpen(true)
    }

    const closeSidebar = () => {
        setSidebarOpen(false)
    }

    // have to pass in two parameters here because when we open the menu we need to know what button the pressed(text)
    // and we also need to know where the button is located to display the submenu with coordinates
    const openSubmenu = (text, coordinates) => {
        // the text parameter will be the page value that we are looking for
        // so we run find method to find where the link.page is equal to the text(e.target.textContent)
        const page = sublinks.find((link) => link.page === text)
        setPage(page)
        // run the setLocation function and pass in the coordinates since location is an empty object to begin with
        setLocation(coordinates)
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
            location,
            page
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