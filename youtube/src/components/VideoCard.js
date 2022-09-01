import React from 'react'
import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl  } from '../utils/constants'

// destructuring the video we get.  Grabbing id then grabbing it's videoId. then grabbing the whole snippet object which has channelId, channelTitle, description etc..
const VideoCard = ({video: { id: { videoId }, snippet}}) => {
  return (
    <Card variant="outlined" sx={{width: { xs: "100%", sm: "358px", md: "320px"}, boxShadow: "none"}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      {/* console.log snippet to see how to get these values */}
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ width: {xs: "100%", sm: "358px", md: "320px"}, height: 180}}/>
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px"}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle1' fontWeight="bold" color="#FFF">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px"}} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard