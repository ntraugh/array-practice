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
          {/* we want the index from this map becauase we are making lists */}
          <div className='sidebar-links'>
            {sublinks.map((link, index) => {
              // we destructure the link and page from our data right away
              const {links, page} = link
              return <article key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {/* we can map over links because it is also an array nested in our original array */}
                  {links.map((link, index) => {
                    // destructure our links right away
                    const {label, icon, url} = link
                    return <a key={index} href={url}>
                      {icon}
                      {label}
                    </a>
                  })}
                </div>
              </article>
            })}
          </div>
        </div>
    </aside>
  )
}

export default Sidebar