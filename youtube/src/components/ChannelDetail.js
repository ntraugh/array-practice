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
  console.log(channelDetails, videos)

  useEffect(() => {
    // useEffect to fetch our data everytime our id changes 
    fetchApi(`channels?part="snippet&id=${id}`)
    .then((data) => setChannelDetails(data?.items[0]))
    
    fetchApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))

  }, [id])
  return (
    <div>{id}</div>
  )
}

export default ChannelDetail