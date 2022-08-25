import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from './context'


const Submenu = () => {
  // need to bring in location so we know where to open the submenu
  // page is an object as stated in context.js so we need to destructure it correctly
  const { submenuOpen, location, page:{page, links} } = useGlobalContext()
  const container = useRef(null)
  

  // everytime the location changes we can run a useEffect
  useEffect(() => {
    
    const submenu = container.current
    // destructure the center and bottom from our location
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    
  }, [location])

  return (
    <aside className={`${submenuOpen ? "submenu show" : "submenu"}`} ref={container}>
        <h4>{page}</h4>
        {/* setting a classname to a state value */}
        <div className={`submenu-center col-1`}>
          {links.map((link, index) => {
            const { label, icon, url } = link
            return <a href={url}  style={{"marginBottom": "1rem"}}>
              {icon}
              {label}
            </a>
          })}
        </div>
    </aside>
  )
}

export default Submenu