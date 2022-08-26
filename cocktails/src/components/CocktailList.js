import React from 'react'
import Cocktail from './Cocktail'
import Loading from "./Loading"
import { useGlobalContext } from "../context.js"

const CocktailList = () => {
  const { loading, cocktail } = useGlobalContext()

  if(loading) {
    return <Loading />
  } 
  if(cocktail.length < 1 ) {
    return <h2 className='section-title'>
      No cocktails match the search
    </h2>
  }

  return (
    <h2> Cocktail List</h2>
  )
}

export default CocktailList