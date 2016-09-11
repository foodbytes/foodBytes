import React, { Component } from 'react'
import ReactPlayer from 'react-player'

const Audio = ({currentStep, audio_path, playing, repeat}) => {

    if (!playing) {
      return <div>Loading...</div>
    }

    else if (repeat) {
      console.log(repeat);
      return (
        <div>
          <ReactPlayer url={audio_path} playing={playing} />
        </div>
      )
    }

    return (
      <div>
        <ReactPlayer url={audio_path} playing={playing} />
      </div>
    )
}

export default Audio
