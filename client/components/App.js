
import React, { Component } from 'react'
import Audio from './audio.js'
import speechRecognition from '../speechRecognition.js'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

class App extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    console.log(this.props);
    speechRecognition(this.props)
  }

    // <Audio step={this.props.step} audio={this.props.audio}/>

  render () {
    return(
        <div>

        </div>
        )
    }

}

// const mapStateToProps = (state) => {
//   return {
//     step: state.step[state.position],
//     audio: state.audio[state.position]
//   }
// }

// export const AppContainer = connect(
//   mapStateToProps,
//   actionCreators
//   )(App)

export default App;
