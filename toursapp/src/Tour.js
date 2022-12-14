import React, { useState } from 'react'

// first we destructure ALL of our tour info inside our parameters which comes from the {...tour} we passed into the <Tour /> component in Tours.js
const Tour = ({id, image, info, price, name, removeTour}) => {
    // setting up state value to display or not display the tour.info
    const [readMore, setReadMore] = useState(false)

  return (
    // since we have passed all of this info all the way down to this component, the Tour component knows that the {image} is coming from our API call
    <article className='single-tour'>
        <img src={image} alt={name}/>
        <footer>
            <div className='tour-info'>
                <h4>{name}</h4>
                <h4 className='tour-price'>{price}</h4>
            </div>
            {/* set up a conditional statement, if the readMore is true then we show the whole paragraph, if it's false we show a substring of the paragraph */}
            <p>{ readMore ? info : `${info.substring(0,150)}...`}
            {/* Everytime we click the button setReadMore to the opposite of what it just was (toggle functionality) */}
            <button onClick={() => setReadMore(!readMore)}>
                {/* if readMore is true our whole paragraph is shown so they see "Show Less", if they click it the state changes to false and we display "Show More" */}
                {readMore ? "Show Less" : "Show More"}
            </button>
            </p>
            <button className='delete-btn' onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </footer>
    </article>
  )
}

export default Tour