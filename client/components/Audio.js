import React from 'react'
import ReactPlayer from 'react-player'

export default ({active_audio_path, playing}) => {
    return (
      <div className="hidden">
        <ReactPlayer url={active_audio_path} playing={playing} />
      </div>
    )
}
