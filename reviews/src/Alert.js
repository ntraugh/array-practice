import React from 'react'

// destructuring the alert state value here, don't need show. 
const Alert = ({alert}) => {
  return (
    // setup a classname with alert property and then a second css property that is dynamic depending on the state
    <p className={`alert alert-${alert.type}`}>{alert.msg}</p>
  )
}

export default Alert