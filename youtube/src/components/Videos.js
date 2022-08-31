import React from 'react'
import { Stack, Box } from "@mui/material"
import VideoCard from './VideoCard'


const Videos = ({videos}) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((video, i) => {
        return <Box key={i}>
{/* if there is a videoId on the item we render a VideoCard component */}
          {video.id.videoId && <VideoCard video={video}/>}
        </Box>
      })}
    </Stack>

  )
}

export default Videos