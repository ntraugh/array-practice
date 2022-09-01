import React, {useState, useEffect} from 'react'
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography, Box, Stack } from "@mui/material"
import { CheckCircle } from '@mui/icons-material'

import { Videos } from "./"
import { fetchApi } from '../utils/fetchApi'


const SingleVideo = () => {

  const [detail, setDetail] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setDetail(data.items[0]))
  }, [id])

  return (

    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row"}}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px"}}>
            {/* reacPlayer takes in a url */}
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}/>
          </Box>
        </Box>
      </Stack>

    </Box>
  )
}

export default SingleVideo