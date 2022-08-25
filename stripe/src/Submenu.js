import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from './context'


const Submenu = () => {
  // need to bring in location so we know where to open the submenu
  const { submenuOpen, location } = useGlobalContext()
  const container = useRef(null)

  // everytime the location changes we can run a useEffect
  useEffect(() => {
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [location])

  return (
    <aside className={`${submenuOpen ? "submenu show" : "submenu"}`} ref={container}>
        Submenu
    </aside>
  )
}

export default Submenu