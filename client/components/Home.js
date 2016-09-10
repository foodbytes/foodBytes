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
    receiveRecipeSteps()
    // fetchRecipeSteps(id)
    console.log('these are the props', this.props);
    speechRecognition(this.props)
    //console.log(speechRecognition);
  }

  render () {
    return(
     <div className="jumbotron">
       {/* Image with foodbytes header*/}
       <div className="well row">
         <div>
           <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4"></div>
           <div className="container col-xs-12 col-sm-6 col-md-4 col-lg-4">
             <div className="text-center">
             <h1>Food Bytes</h1>
             </div>
           <div className="thumbnail">
             <img src="http://www.fillmurray.com/300/200" alt="..."></img>
           </div>
           </div>
           <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
           </div>
           </div>
         </div>



       {/* Foodbytes description with iframe header*/}

       <div className=" well row">
         <div>
          <div className="well  col-xs-12 col-sm-6 col-md-6 col-lg-4">
           <span>
             <h3 text-center>Why Food Bytes</h3>
             <p>Welcome to awesomeness!</p>
           </span>

           <a className="btn btn-danger btn-sm" href="#" role="button">Available Recipes</a>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2 col-lg-4"></div>
          <div className="well col-xs-12 col-sm-6 col-md-4 col-lg-4">
           <iframe width="500" height="315"src="https://www.youtube.com/embed/XGSy3_Czz8k"></iframe>
          </div>
         </div>
       </div>
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
