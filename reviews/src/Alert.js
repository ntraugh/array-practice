import React, { useEffect } from 'react'

// grabbing alert prop and unShowAlert prop which contains a function from the App component. 
const Alert = ({alert, unShowAlert}) => {

  // using useEffect to unShow the alert after 3000 ms or 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
        unShowAlert()
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])
  return (
    // setup a classname with alert property and then a second css property that is dynamic depending on the state
    <p className={`alert alert-${alert.type}`}>{alert.msg}</p>
  )
}

export default Alert