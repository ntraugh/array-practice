import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours"
// setting up our api url for fetching data
const url = 'https://course-api.com/react-tours-project'

function App() {
  // setting our loading value to true to begin with
  const [loading, setLoading] = useState(false)

  // setting our tours state that we will use when we update the values
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    // filtering our tours data where the tour.id doesn't match the id passed in, essentially filtering out the one that does match(that needs to be deleted)
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  // create async await function to use inside useEffect
  const getTours = async () => {
    try{
      const res = await fetch(url)
      const tours = await res.json();

      // setLoading to false after we've got the data back from the api and setTours to the tours data
      setLoading(false)
      setTours(tours)
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  // calling our fetch function inside useEffect so it only renders once
  useEffect(() => {
    getTours()
  }, [])

  // if loading is true show the Loading component
  if(loading) {
    return <main>
      <Loading />
    </main>
  }

  // if we aren't loading we'll show this section
  return <main>

    {/* passing our tours state data to the Tours component, check the tours component to see ({ tours }) */}
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
  
}

export default App;
