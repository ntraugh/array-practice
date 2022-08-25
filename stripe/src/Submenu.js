import React from 'react'
import { useGlobalContext } from './context'


const Submenu = () => {
  const { submenuOpen } = useGlobalContext()

  return (
    <aside className={`${submenuOpen ? "submenu show" : "submenu"}`}>
        Submenu
    </aside>
  )
}

export default Submenu