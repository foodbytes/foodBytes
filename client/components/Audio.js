
import React, { Component } from 'react'

const Audio = ({step, audio}) => {

    return ( <audio id={step}>
      <source src={audio}></source>
    </audio>)
  }

export default Audio
