
import React, { Component } from 'react'
import Audio from './Audio.js'
import speechRecognition from '../speechRecognition.js'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {nextAction, fetchRecipeSteps, setState} from '../actions/actionCreators'


const mapStateToProps = (state) => {
  return {
    data: state.steps
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchRecipeSteps}, dispatch)
}

class App extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const { fetchRecipeSteps } = this.props
    const id = 1
    fetchRecipeSteps(id[id.length - 1])
    console.log('these are the props', this.props);
    speechRecognition()
    console.log(speechRecognition);
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


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
