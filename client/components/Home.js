import React, { Component } from 'react'
import Audio from './Audio.js'
import speechRecognition from '../speechRecognition.js'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {receiveRecipeSteps, nextDispatch, fetchRecipeSteps } from '../actions/actionCreators'
import { Router, Route, hashHistory, Link } from 'react-router'
import ContentsPage from './ContentsPage'

class Home extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const { fetchRecipeSteps } = this.props
    const id = 0
    //receiveRecipeSteps()
    fetchRecipeSteps(id)
    //console.log('these are the props', this.props);
    speechRecognition(this.props)
    //console.log(speechRecognition);
  }

  render () {
    return(
        <div>
        {/* default nav bar, image placeholder, iframe */}
          <h1>Speech Recognition is Working - Rendering by Home.js</h1>
          <button type="button"> Click Here!</button>
        </div>
        )
    }

}

const mapStateToProps = (state) => {
  return {
    //data: state.steps
  }
}

const mapDispatchToProps = (dispatch) => {
  //bindActionCreators is unknown. keep in mind
  return bindActionCreators({ fetchRecipeSteps, nextDispatch }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
