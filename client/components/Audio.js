import React, { Component } from 'react'

const Audio = ({currentStep, audio_path}) => {

    return ( <audio id={currentStep}>
      <source src={audio_path}></source>
    </audio>)
  }

export default Audio
