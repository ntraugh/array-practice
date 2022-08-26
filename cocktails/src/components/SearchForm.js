import React, {useEffect} from "react";
import { useGlobalContext } from "../context.js"

const SearchForm = () => {
    // grabbing our setInput function from context.js
    const { setInput } = useGlobalContext()
    const searchValue = React.useRef("")

    useEffect(() => {
        searchValue.current.focus()
    }, [])

    const searchCocktail = () => {
        setInput(searchValue.current.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <section className="section search">
           <form className="search-form" onSubmit={handleSubmit}>
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