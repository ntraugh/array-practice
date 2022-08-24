import React from 'react'
import { useGlobalContext } from './context'
import { FaBars } from "react-icons/fa"
import logo from "./images/logo2.svg"

const Navbar = () => {
  // grab the functions from globalContext that we need in the navbar
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext()

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
            <button className='link-btn'>
              products
            </button>
          </li>
          <li>
            <button className='link-btn'>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn'>
              Company
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