import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()

const initialState = {
    loading:false,
    cart:cartItems,
    total:0,
    amount:0
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // creating our clear cart functionality and passing it into our provider so our other components can use it
    const clearCart = () => {
        dispatch({type: "CLEAR_CART"})
    }

    const remove = (id) => {
        // you can name payload whatever you want but it takes in the id
        // we use this payload by grabbing action.payload in our reducer.js file
        dispatch({type: "REMOVE", payload: id})
    }

    return (
        <AppContext.Provider value={ { ...state, clearCart, remove } }
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider}