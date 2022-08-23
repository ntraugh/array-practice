import React from 'react'
import Tour from './Tour'


// Tours component that maps through all of our ({tours}) that we passed in from our state value in the App.js
// We return the single Tour component that will have all tour data in it {...tour}
const Tours = ({tours, removeTour}) => {
  return (
    <section>
        <div className='title'>
            <h2>Our Tours</h2>
            <div className='underline'></div>
        </div>
        <div>
            {tours.map((tour) => {
                // we can pass the data to our Tour component because when we map over tours, each tour has all the data. so we use the spred operator to get all the data.
                return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
            })}
        </div>
    </section>
  )
}

export default Tours