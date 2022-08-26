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
          console.log(data)
        } catch (err) {
          console.log(err)
        }
    }
    getCocktail()
  }, [id])

  return (
    <div>{id}</div>
  )
}

export default SingleCocktail