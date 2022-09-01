import React, {useState, useEffect} from 'react'
// since we are on a specific channel page we can grab that parameter with useParams
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import { Videos, ChannelCard } from "./"
import { fetchApi } from '../utils/fetchApi'

const ChannelDetail = () => {

  const [channelDetails, setChannelDetails] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams()

  useEffect(() => {
    // useEffect to fetch our data everytime our id changes 
    fetchApi(`channels?part="snippet&id=${id}`)
    .then((data) => setChannelDetails(data?.items[0]))
    
    fetchApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))

  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div 
          style={{
            background: "linear-gradient(to right bottom, #961208, #af1308, #c81407, #e21506, #fc1503)", 
            zIndex: 10,
            height: "300px"}} 
        />
        <ChannelCard channel={channelDetails} marginTop="-100px"/>
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "150px"}}} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>

  )
}

export default ChannelDetail