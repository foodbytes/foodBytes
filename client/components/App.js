
import React, { Component } from 'react'
import Audio from './audio.js'
import speechRecognition from '../speechRecognition.js'
import {connect} from 'react-redux'
import * as actionCreators from '../actionCreators'

class App extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    speechRecognition(this.props)
  }

  render () {
    return(
        <div>
          <Audio step={this.props.step} audio={this.props.audio}/>
        </div>
        )
    }

}

const mapStateToProps = (state) => {
  return {
    step: state.step[state.position],
    audio: state.audio[state.position]
  }
}

export const AppContainer = connect(
  mapStateToProps,
  actionCreators
  )(App)
