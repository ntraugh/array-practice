import React from 'react'
import { useGlobalContext } from './context'
import { FaBars } from "react-icons/fa"
import logo from "./images/logo2.svg"

const Navbar = () => {
  // grab the functions from globalContext that we need in the navbar
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext()
  const displayMenu = (e) => {
    // when we hover in our console our "e.target" is the button, so we grab the textContent from it and not the value
    const page = e.target.textContent
    // getBoundingClientRect gives you back the exact position on the dom where that element is located
    const tempBtn = e.target.getBoundingClientRect()
    // leaving this console log in here to show what getBoundingClientRect gives back
    console.log(tempBtn)
    // grabbing the center of the button by adding left and right and dividing by 2
    const center = (tempBtn.left + tempBtn.right) / 2
    // grabbing the bottom of it and offsetting by 3
    const bottom = tempBtn.bottom - 3 
    // after we have all our values we can pass them into the openSubmenu state function
    openSubmenu(page, { center, bottom })
  }
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt="strip"/>
          {/* when we click this button we'll open the sidebar which is essentially another navbar */}
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displayMenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displayMenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displayMenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>
          Sign In
        </button>
      </div>
    </nav>
  )
}

export default Navbar