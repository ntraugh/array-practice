import React from 'react'
import Tour from './Tour'


// Tours component that maps through all of our ({tours}) that we passed in from our state value in the App.js
// We return the single Tour component that will have all tour data in it {...tour}
const Tours = ({tours}) => {
  return (
    <section>
        <div className='title'>
            <h2>Our Tours</h2>
            <div className='underline'></div>
        </div>
        <div>
            {tours.map((tour) => {
                return <Tour key={tour.id} {...tour} ></Tour>
            })}
        </div>
    </section>
  )
}

export default Tours