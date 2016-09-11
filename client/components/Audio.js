import React, { Component } from 'react'
import ReactPlayer from 'react-player'

const Audio = ({currentStep, audio_path, playing}) => {

    if (!playing) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <ReactPlayer url={audio_path} playing={playing} />
      </div>
    )
}

export default Audio
