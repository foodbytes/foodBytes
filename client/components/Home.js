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
        <div className="jumbotron">
        {/* default nav bar, image placeholder, iframe */}
           <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                   <img src="http://www.fillmurray.com/460/300" alt="..."></img>
                <div className="caption">
                   <h3>Food Bytes</h3>
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
