import React, { Component } from 'react'
import Audio from './Audio'
import speechRecognition from '../speechRecognition.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { receiveRecipeSteps, nextDispatch, fetchRecipeSteps, previousDispatch, repeatDispatch } from '../actions/actionCreators'
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

  checkReady(){
    const { playing } = this.props.data
    if (playing !== undefined) {
      console.log("What is playing? ", playing)
      console.log('This is the audio being played ', this.props.data.audio_path[this.props.data.currentStep - 1])
      return <Audio currentStep={this.props.data.currentStep} audio_path={this.props.data.audio_path[this.props.data.currentStep - 1]} playing={playing}/>
    }
  }

  render () {

    return(

     <div className="jumbotron">
     {speechRecognition(this.props)}
       {/* Image with foodbytes header*/}
       <div className="well row">
         <div>
           <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4"></div>
           <div className="container wide col-xs-12 col-sm-6 col-md-4 col-lg-4">
             <div className="page-header text-center">
             <h1>Food Bytes</h1>
             {this.checkReady()}
             </div>
           <div className="thumbnail">
             <img src="https://cdn.shopify.com/s/files/1/1043/3552/products/roast-chicken-with-apricot-stuffing_grande.jpeg?v=1457647233" alt="..."></img>
           </div>
           </div>
           <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
           </div>
           </div>
         </div>

       {/* Foodbytes description with iframe header*/}

       <div className=" well row">
         <div>
          <div className="well col-xs-12 col-sm-6 col-md-6 col-lg-4">
           <span className="">
             <h2 className="left-text text-center">Why Food Bytes</h2>
             <p className= "well accordion text-center" data-toggle="collapse" data-target="#demo">Click to know more</p>
             <div id="demo" className=" text-justify collapse">
              <h5> Foodbytes simplifies cooking experience by providing a voice interactive recipe instructor that understands commands!. Check the demo on youtube </h5>
             </div>
           </span>

           <a className="btn btn-danger btn-xs" href="#" role="button">Available Recipes</a>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2 col-lg-4"></div>
          <div className="well col-xs-12 col-sm-6 col-md-4 col-lg-4">
           <div className="embed-responsive embed-responsive-16by9">
           <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/y9N2yFDaQ_8" frameborder="0" allowfullscreen></iframe>
           </div>
          </div>
         </div>
       </div>
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
  return bindActionCreators({ fetchRecipeSteps, nextDispatch, previousDispatch, repeatDispatch }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
