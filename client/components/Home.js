import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchRecipe} from '../actions/actionCreators'
import { Router, Route, hashHistory, Link } from 'react-router'
import RecipeList from './RecipeList'


class Home extends Component {

  constructor(props){

    super(props)
    this.handleClickImage= this.handleClickImage.bind(this)
  }

  handleClickImage(){
    let audio= new Audio("./audio/foodBytesIntroduction.mp3");
    audio.play()
  }

  render () {
    return(
      <div className="jumbotron">
        <div className="row">
            <h1 className=" header text-center">Food Bytes</h1>
          <div  className=" row">
            <h3 className=" well text-center">Online recipe support, so you can focus on cooking and keep food well away from your electronic device.</h3>
          </div>
        </div>

        <div className="well row">
          <div className="col-xs-12 col-sm-6 col-md-4"></div>
              <div className=" col-xs-12 col-sm-6 col-md-4" data-toggle="collapse" data-target="#demo" onClick={this.handleClickImage} id="imageClick">
                <img src="../images/bananas_icon_speaker_cartoon.png" alt="home page"/>
              </div>
          <div className="col-lg-12 col-sm-6 col-md-4"></div>
        </div>

        <div className=" row">
          <div className="col-xs-12 col-sm-6 col-md-2"></div>
          <div className="well col-xs-12 col-sm-6 col-md-8 text-center collapse" id="demo" >
            <h4> Hi and welcome to FoodBytes. I am CC, your guide. </h4>
            <h4>Foodbytes is an interactive audio recipe book. By reading the recipes out to you your hands are free to get on with the cooking. </h4>
            <h4>To talk to me, say my name and a command. </h4>
            <h4 className="bold">The commands I understand are "CC next", "CC previous" and "CC repeat".</h4>
            <h4>So head on over to the recipe page to get started...I will meet you there. </h4>
          </div>
          <div className="col-lg-12 col-sm-6 col-md-2"></div>
        </div>

        <div className=" row">
          <div className="col-xs-12 col-sm-6 col-md-2"></div>
          <div className="well col-xs-12 col-sm-6 col-md-8 text-center">
          <Link to="/recipes"><button role="presentation" className=" recipes btn btn-md">Recipes</button></Link>
          </div>
          <div className="col-lg-12 col-sm-6 col-md-2"></div>
        </div>
      </div>
    )
  }
}

export default Home
