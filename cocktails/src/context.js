import React, { useContext, useState, useEffect } from "react"
import { useCallback } from "react"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)
    const [cocktail, setCocktail] = useState([])

    return <AppContext.Provider value={{
        loading, input, cocktail, setInput
    }}>
        { children }
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }