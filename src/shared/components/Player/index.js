import React from 'react'
import ReactPlayer from 'react-player'

export function Player({url}) {
  return (
    <ReactPlayer 
      url={url} 
      controls
      width='100%'
      height='100%'
    />
  )
}