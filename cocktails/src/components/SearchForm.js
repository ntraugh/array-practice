import React from "react";
import { useGlobalContext } from "../context.js"

const SearchForm = () => {
    // grabbing our setInput function from context.js
    const { setInput } = useGlobalContext()

    return (
        <div>
            <h2>Search Form</h2>
        </div>
    )
}


export default SearchForm