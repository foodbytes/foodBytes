import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchRecipe} from '../actions/actionCreators'
import { Router, Route, hashHistory, Link } from 'react-router'
import RecipeList from './RecipeList'
import ReactPlayer from 'react-player'



class Home extends Component {

  constructor(props){

    super(props)
    this.handleClickImage= this.handleClickImage.bind(this)
  }

  handleClickImage(){
    console.log('bananas');
    let audio= new Audio("./audio/foodBytesIntroduction.mp3");
    audio.play()
  }


  render () {
    return(
      <div className="jumbotron">
        <div className="row">
          <div className="text-center">
            <h1>Foodbytes</h1>
          </div>

          <div  className="well row">
            <h2 className="text-center">Your talking recipe guide</h2>
          </div>
        </div>

        <div className="well row">
          <div className="col-xs-12 col-sm-6 col-md-2"></div>
            <div className=" spinnerDiv col-xs-12 col-sm-6 col-md-8" onClick={this.handleClickImage} id="imageClick">
              <div className=" spinner spinner-4" data-toggle="collapse" data-target="#demo" ></div>
            </div>
          <div className="col-lg-12 col-sm-6 col-md-2"></div>
        </div>

        <div className="well row">
          <div className="col-xs-12 col-sm-6 col-md-2"></div>
          <div className="well col-xs-12 col-sm-6 col-md-8 text-justify collapse" id="demo" >
            <h4> Hi and welcome to FoodBytes. I am CC, your guide. </h4>
            <h4>Foodbytes is an interactive audio recipe book. By reading the recipes out to you your hands are free to get on with the cooking. </h4>
            <h4>To talk to me, say my name and a command. The commands I understand are "CC next", "CC previous" and "CC repeat". So head on over to the recipe page to get started...I will meet you there. </h4>
          </div>
          <div className="col-lg-12 col-sm-6 col-md-2"></div>
        </div>
      </div>
    )
  }
}

export default Home
