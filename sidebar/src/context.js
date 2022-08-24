import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

// ALWAYS PASS IN CHILDREN INTO THE PROPS HERE
const AppProvider = ({ children }) => {
    return <AppContext.Provider value="hello">{children}</AppContext.Provider>
}

// custom hook to export to our components
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}