import React from 'react'
import Cocktail from './Cocktail'
import Loading from "./Loading"
import { useGlobalContext } from "../context.js"

const CocktailList = () => {
  // we make the API call in our context.js but because of global context we can access our cocktail state in this component
  const { loading, cocktail } = useGlobalContext()
  if(loading) {
    return <Loading />
  } 
  if(cocktail.length < 1 ) {
    return (<h2 className='section-title'>
      No cocktails match the search
    </h2>)
  }

  return (
    <section className='section'>
      <h2 className='section-title'>
         Cocktail List
      </h2>
      <div className='cocktails-center'>
        {cocktail.map((cocktail) => {
          // map over each cocktail and display the Cocktail component where we will set up the card layout
          return <Cocktail key={cocktail.id} {...cocktail} />
        })}
      </div>

    </section>
  )
}

export default CocktailList