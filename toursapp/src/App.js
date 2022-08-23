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

  // create async await function to use inside useEffect
  const getTours = async () => {
    const res = await fetch(url)
    const tours = await res.json();
    console.log(tours)
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
    <Tours />
  </main>
  
}

export default App;
