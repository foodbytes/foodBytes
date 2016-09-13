import React from 'react'
import ReactPlayer from 'react-player'

export default ({audio_path, playing}) => {
    return (
      <div className="hidden">
        <ReactPlayer url={audio_path} playing={playing} />
      </div>
    )
}
