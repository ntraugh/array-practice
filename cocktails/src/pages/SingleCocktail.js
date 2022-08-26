import React, {useEffect, useState} from 'react'
import Loading from "../components/Loading"
import { useParams, Link } from "react-router-dom"
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  // useParams gives us back the number in our parameter from our URL. since we set up each single page to be /cocktail/:id it is grabbing that specific ID
  const { id } = useParams()
  const [ loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)
  
  useEffect(() => {
    setLoading(true)
    const getCocktail = async () => {
        try {
          const res = await fetch(`${url}${id}`)
          const data = await res.json()
          // if data.drinks exists display if not setCocktail to null
          if(data.drinks) {
            const { 
              strDrink: name, 
              strDrinkThumb: image, 
              strCategory: category, 
              strGlass: glass, 
              strInstructions: instructions, 
              strIngredient1, 
              strIngredient2, 
              strIngredient3, 
              strIngredient4, 
              strIngredient5 } = data.drinks[0]
            const ingredients = [
              strIngredient1, 
              strIngredient2, 
              strIngredient3, 
              strIngredient4, 
              strIngredient5
            ]
          } else {
            setCocktail(null)
          }


        } catch (err) {
          console.log(err)
          setLoading(false)
        }
    }
    getCocktail()
  }, [id])

  return (
    <div>{id}</div>
  )
}

export default SingleCocktail