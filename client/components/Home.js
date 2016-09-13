import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchRecipe } from '../actions/actionCreators'
import { Router, Route, hashHistory, Link } from 'react-router'
import RecipeList from './RecipeList'

class Home extends Component {

  render () {
    return(
      <div>
        <div className="row">
          <div className="page-header text-center">
            <h1>Food Bytes</h1>
          </div>
          <div>
            <h2 className="text-center">Your talking recipe guide</h2>
          </div>
        </div>
        <div className="well row">
          <div className="col-xs-12 col-sm-6 col-md-2"></div>

            <div className=" spinnerDiv col-xs-12 col-sm-6 col-md-8 ">
              <div className=" spinner spinner-4 "></div>
            </div>

        { /* <div className=" spinnerDiv thumbnail col-xs-12 col-sm-6 col-md-8">
          <img className="spinner spinner-4" width="400" height="400" src="../../images/bananas_icon_speaker_cartoon.png" alt=""></img>
          </div>*/}
          <div className="col-lg-12 col-sm-6 col-md-2"></div>
        </div>
        <div className=" well row">
          {/*<h2 className="left-text text-center">Why Food Bytes</h2>*/}
          <p className= "well accordion text-center" data-toggle="collapse" data-target="#demo">Click to know more</p>
          <div id="demo" className=" text-justify collapse">
            <h5> Foodbytes simplifies cooking experience by providing a voice interactive recipe instructor that understands commands!. Check the demo on youtube </h5>
          </div>
          <a className="btn btn-danger btn-xs" href="#" role="button">Available Recipes</a>
        </div>
      </div>
    )
  }
}

export default Home
