import React from 'react'
import {social, links} from "./data.js"
import  logo  from "./logo.svg"
import { FaTimes } from "react-icons/fa"

const Sidebar = () => {
  return (
    <aside className={`sidebar show-sidebar`}>
      <div className='sidebar-header'>
        <img src={logo} alt="logo" className='logo'/>
        <button className="close-btn">
          <FaTimes /> 
        </button>
      </div>
      <ul className='links'>
        {/* map through our links data and destructure the data to use in the list items */}
        {links.map((link) => {
          const { id, url, text, icon} = link
          return <li key={id} >
            <a href={url}>
              {icon} {text}
            </a>
          </li>
        })}
      </ul>
      {/* map over our social icons to display them as well here */}
      <ul className='social-icons'>
        {social.map((app) => {
          const { id, url, icon } = app
          return <li key={id}>
            <a href={url}>
              {icon}
            </a>
          </li>
        })}
      </ul>
    </aside>
  )
}

export default Sidebar