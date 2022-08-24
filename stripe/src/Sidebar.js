import React from 'react'
import sublinks from './data'
import { useGlobalContext } from './context'
import {FaTimes} from "react-icons/fa"

const Sidebar = () => {
  const {sidebarOpen, closeSidebar} = useGlobalContext()
  return (
    <aside className={`${sidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}`}>
        <div className='sidebar'>
          <button className='close-btn' onClick={closeSidebar}>
            <FaTimes /> 
          </button>
        </div>
    </aside>
  )
}

export default Sidebar