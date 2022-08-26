import React from "react";
import { useGlobalContext } from "../context.js"

const SearchForm = () => {
    // grabbing our setInput function from context.js
    const { setInput } = useGlobalContext()
    const searchValue = React.useRef("")

    const searchCocktail = () => {
        setInput(searchValue.current.value)
    }
    return (
        <section className="section search">
           <form className="search-form">
            <div className="form-control">
                <label htmlFor="name">
                    Search cocktails
                </label>
                <input type="text" id="name" ref={searchValue} onChange={searchCocktail} />
            </div>
           </form>
        </section>
    )
}


export default SearchForm