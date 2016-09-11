import React, { Component } from 'react'
import ReactPlayer from 'react-player'

const Audio = ({currentStep, audio_path, playing}) => {

    if (!playing) {
      return <div>Loading...</div>
    }

    return (
<<<<<<< HEAD
      <div>
=======
      <div className ="hidden">
>>>>>>> 89566a65e00cb83976ba7cf0c9915508919d6112
        <ReactPlayer url={audio_path} playing={playing} />
      </div>
    )
}

export default Audio
