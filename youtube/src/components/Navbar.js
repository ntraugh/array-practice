import React from 'react'
// hover over each component and click demo to get a demo
import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from "../utils/constants"
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <Stack 
      spacing={2} 
      direction="row" 
      alignItems="center" 
      p={2} 
      sx={{position: "sticky", background: "#000", top: 0, justifyContent: "space-between"}}>
      <Link to="/" style={{display: "flex", alignItems: "center"}}>
        {/* image is initially huge, place a height property on it to change the size */}
        <img src={logo} alt="ourlogo" height={45} />
      </Link>
      <Searchbar />
    </Stack>
  )
}

export default Navbar