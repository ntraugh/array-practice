import React from 'react'
import { Stack } from "@mui/material"

import { categories } from '../utils/constants'
const selectedCat = "New"

const Sidebar = () => {
  return (
// create a Stack with direction of Row for the sidebar
    <Stack direction="row" sx={{ 
        overflowY: "auto", 
        height: { sx: "auto", md: "95%"},
        flexDirection: { md: "column"}}}>
{/* map through our categories and get the name and icon to display a button */}
        {categories.map((cat, i) => {
            return <button 
            key={i} 
            className="category-btn" 
            style={
                {background: cat.name === selectedCat && "#FC1503",
                color: "white"}}>
               <span >
                    {cat.name}
                </span>
               <span style={
                    { color: cat.name === selectedCat ? "white": "red"}}>
                    {cat.icon}
                </span>
            </button>
        })}
    </Stack>
  )
}

export default Sidebar