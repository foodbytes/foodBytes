import React, { Component } from 'react'
import ReactPlayer from 'react-player'

const Audio = ({currentStep, audio_path}) => {


  return (
    <div>
      <ReactPlayer url={audio_path} playing />
    </div>
  )
}

export default Audio
