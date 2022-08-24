import React, { useEffect } from 'react'

// grabbing alert prop and unShowAlert prop which contains a function from the App component. 
// by passing in our list component here we can use it for our useEffect array. So everytime the list state is changed we rerender the alert
// if it was an empty array it would run one time for 2 seconds no matter how many buttons are pressed.
const Alert = ({alert, unShowAlert, list}) => {

  // using useEffect to unShow the alert after 3000 ms or 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
        unShowAlert()
    }, 2000)
    return () => clearTimeout(timeout)
  }, [list])
  return (
    // setup a classname with alert property and then a second css property that is dynamic depending on the state
    <p className={`alert alert-${alert.type}`}>{alert.msg}</p>
  )
}

export default Alert