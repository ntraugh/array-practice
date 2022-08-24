import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { useGlobalContext } from './context'



const Modal = () => {
  // destructure modalOpen state from context.js useGlobalContext
  // destructure closeModal function from useGlobalContext which sets modalOpen to false
  const {modalOpen,closeModal} = useGlobalContext()

  return (
    // creating a dynamic classname depending on if the modal is clicked or not
    <div className={`${modalOpen ? "modal-overlay show-modal" : "modal-overlay"}`}>
      <div className='modal-container'>
        <h3>Modal content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal