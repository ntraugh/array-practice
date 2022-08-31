import React, {useState, useEffect } from 'react'
import { Box, Stack, Typography } from "@mui/material"
import Sidebar from './Sidebar'
import Videos from './Videos'

import { fetchApi } from '../utils/fetchApi'


const Feed = () => {

  const [selectedCat, setSelectedCat] = useState("New")
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${selectedCat}`)
    .then((data) => setVideos(data.items))
  }, [selectedCat])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row"}}}>
        <Box sx={{ height: { sx: "auto", md: "92vh"}, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2}}}>
          {/* place the sidebar in a box */}
          <Sidebar selectedCat={selectedCat} setSelectedCat={setSelectedCat}/>
          {/* footer for sidebar */}
          <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: "#fff"}}>
            Copyright 2022 Nate Traugh
          </Typography>
        </Box>
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2}}>
          <Typography variant='h4' fontWeight="bold" mb={2} sx={{color: "white"}}>
            {selectedCat} <span style={{color: "#F31503" }}>Videos</span>
          </Typography>
          <Videos videos={videos}/>
        </Box>

    </Stack>

  )
}

export default Feed