import React from 'react'
import { Stack, Box } from "@mui/material"
import {ChannelCard, VideoCard} from './'


const Videos = ({videos}) => {
  console.log(videos)
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((video, i) => {
        return <Box key={i}>
{/* if there is a videoId on the item we render a VideoCard component */}
          {video.id.videoId && <VideoCard video={video}/>}
          {video.id.channelId && <ChannelCard channel={video}/>}
        </Box>
      })}
    </Stack>

  )
}

export default Videos