import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"


const Modal = () => {
  return (
    // creating a dynamic classname depending on if the modal is clicked or not
    <div className={`modal-overlay`}>
      <div className='modal-container'>
        <h3>Modal content</h3>
        <button className='close-modal-btn'>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal