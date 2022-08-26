import React, { useContext, useState, useEffect } from "react"
import { useCallback } from "react"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(true)
    const [cocktail, setCocktail] = useState([])

    
    const fetchDrinks = async () => {
        setLoading(true)
        try {
            const res = await fetch(`${url}${input}`)
            const data = await res.json()
            const { drinks } = data;
            if(drinks) {
                const newCocktails = drinks.map((drink) => {
                    // destructure the properties that we get back from the API
                    const {strDrinkThumb, strCategory, idDrink, strDrink, strGlass} = drink
                    // return a new object that renames the properties to shorter names
                    return {id: idDrink, name: strDrink, image: strDrinkThumb, category: strCategory, glass: strGlass}
                })
                // then setCocktail to our new object
                setCocktail(newCocktails)
            } else {
                // if cocktails are null set it to empty array
                setCocktail([])
            }
            
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    // calling data from API so we useEffect with empty array to display on first render
    useEffect(() => {
        fetchDrinks()
    }, [])

    return <AppContext.Provider value={{
        loading, cocktail, setInput
    }}>
        { children }
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }