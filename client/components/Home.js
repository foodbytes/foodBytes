import React, { Component } from 'react'
import Audio from './Audio'
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
    fetchRecipeSteps(id)
  }

  //  audioPlayer() {
  //     console.log("ifbobhbvbfav", this.props)
  //     if (this.props.data.currentStep !== undefined){
  //       console.log('currentStep just before audio in home',this.props.data.currentStep)
  //       console.log('audio_path just before audio in home',this.props.data.audio_path[this.props.data.currentStep])
  //       return (
  //         <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
  //       )
  //     }
  // }

  checkReady(){
    const { playing } = this.props.data
    if (playing !== undefined) {
      console.log("What in playing?", playing);
      return <Audio currentStep={0} audio_path={'https://www.youtube.com/watch?v=ysz5S6PUM-U'} playing={playing}/>
    }
  }

  render () {

    return(
        <div className="jumbotron">
          {speechRecognition(this.props)}
           <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                   <img src="http://www.fillmurray.com/300/200" alt="..."></img>
                <div className="caption">
                   <h3>Food Bytes</h3>
                   {this.checkReady()}
                </div>
              </div>
            </div>
          </div>
            <h3>Why Food Bytes</h3>
            <iframe width="420" height="315"src="https://www.youtube.com/embed/XGSy3_Czz8k"></iframe>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Available Recipes</a></p>
        </div>

        )
    }

}

const mapStateToProps = (state) => {
  return {
    data: state.recipe
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
