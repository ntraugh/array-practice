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

            const newCocktail = {
              name, image, category, glass, instructions, ingredients
            }
            setCocktail(newCocktail)
          } else {
            setCocktail(null)
            setLoading(false)
          }
          setLoading(false)

        } catch (err) {
          console.log(err)
          setLoading(false)
        }
    }
    getCocktail()
  }, [id])

  if(loading) {
    return <Loading />
  }
  if(!cocktail) {
    return <h2 className='section-title'>
      No cocktail to display.
    </h2>
  }

  const { name, image, category, glass, instructions, ingredients} = cocktail
  return (
    <section className='section cocktail-section'>
      <Link to="/" className='btn btn-primary'>
        Home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>
              Name:
            </span>
            {name}
          </p>
          <p>
            <span className='drink-data'>
              Category:
            </span>
            {category}
          </p>
          <p>
            <span className='drink-data'>
              Glass:
            </span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>
              Instructions:
            </span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>
              Ingredients:
            </span>
            {ingredients.map((ingredient, index) => {
              return ingredient ? <span key={index}>{ingredient}</span> : null
            })}
          </p>
        </div>
      </div>
      
      
    
    </section>
  )
}

export default SingleCocktail