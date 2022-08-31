import React from 'react'
import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl  } from '../utils/constants'

// destructuring the video we get.  Grabbing id then grabbing it's videoId. then grabbing the whole snippet object which has channelId, channelTitle, description etc..
const VideoCard = ({video: { id: { videoId }, snippet}}) => {
  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      {/* console.log snippet to see how to get these values */}
        <CardMedia image={snippet?.thumbnails?.high?.url}/>
      </Link>
    </Card>
  )
}

export default VideoCard