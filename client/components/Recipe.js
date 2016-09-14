import React from 'react'
// import speechRecognition from '../speechRecognition.js'
import { bindActionCreators } from 'redux'

import { nextDispatch, previousDispatch, repeatDispatch, stopDispatch, fetchRecipe, wholeRecipeDispatch, ingredientsDispatch, listeningDispatch } from '../actions/actionCreators'

import { connect } from 'react-redux'
import Audio from './Audio'
import Listener from './Listener'



class Recipe extends React.Component {


  /* Checks if the data ready and if so then will create audio component and play the audio */
  constructor (props) {
    super(props)
    this.startListening = this.startListening.bind(this)
    this.handleClickNext = this.handleClickNext.bind(this)
    this.handleClickPrevious = this.handleClickPrevious.bind(this)
    this.handleClickRepeat = this.handleClickRepeat.bind(this)
    this.handleClickStop = this.handleClickStop.bind(this)
    this.handleClickIngredients = this.handleClickIngredients.bind(this)
    this.handleClickWholeRecipe = this.handleClickWholeRecipe.bind(this)
  }

  startListening() {
    this.props.listeningDispatch(true)
  }

  handleClickNext() {
    this.props.nextDispatch(this.props.data.audio_path)
  }

  handleClickPrevious() {
    this.props.previousDispatch(this.props.data.audio_path)
  }

  handleClickRepeat() {
    this.props.repeatDispatch(true)
  }

  /* this method will stop the audio from being played*/
  handleClickStop() {
    this.props.stopDispatch(this.props.data.audio_path)
  }

  handleClickIngredients() {
    this.props.ingredientsDispatch(this.props.data.audio_path)
  }

  handleClickWholeRecipe() {
    this.props.wholeRecipeDispatch(this.props.data.audio_path)
  }

  checkReady(){
    const { playing, active_audio_path, currentStep } = this.props.data
    if (playing !== undefined) {
      // console.log('This is the data before Audio ', active_audio_path);
      // console.log("!!!!!!!!!!!!! Current step is: ", currentStep);
      if (typeof(active_audio_path) === 'string') {
        return <Audio active_audio_path={active_audio_path} playing={playing}/>
      }
      return <Audio active_audio_path={active_audio_path[currentStep - 1]} playing={playing}/>
    }
  }

  /* This method gets the individual instruction and put it back to the <h3> tage  */
  getInstructions(instructions){
    if (instructions !== undefined){
      return instructions.map((instruction, i) => {
        return <li key={i}> {instruction.split(',')}</li>
      })
    }
  }

  getIngredients(ingredients){

    if(ingredients){
      const ingredientArray = ingredients.split('@')

      return ingredientArray.map((ingredient, i) => {
        return <li key={i}> {ingredient}</li>
      })
    }
  }


  componentDidMount () {
    const { fetchRecipe } = this.props
    const id = this.props.params.id

    fetchRecipe(id)
    // go to the api, get recipes
    // dispatch RECEIVE_RECIPE_STEPS
    // run the speechRecognition(this.props, classToListenTo)  as a callback

    // bad mvp
    //speechRecognition(this.props)
  }

  componentWillUnmount () {
    // later
    // destroy the listeners
  }


  render(){
    const { cooking_time, ingredients, instructions, recipePage_image_path, name, notes, listening } = this.props.data

    if (listening !== true) {
      var spinnerClass = "spinnerDiv"
      var thumbnailAlt = "not_listening_red"
    } else {
      var spinnerClass = "spinner spinner-4"
      var thumbnailAlt = "listening_green"
    }

    return (

      <div className="jumbotron">
        <Listener />
          <div className="row well ">
              <div className= "col-xs-12 col-sm-3 col-md-2 col-lg-2"></div>
              <div className="commands col-xs-12 col-sm-6 col-md-8 col-lg-8">
                  <a>Available commands:</a>
                  <a type ="button" className="btn" onClick={this.handleClickNext} id="next">Next</a>
                  <a type ="button" className="btn" onClick={this.handleClickPrevious} id="Previous">Previous</a>
                  <a type ="button" className="btn" onClick={this.handleClickRepeat} id="Repeat">Repeat</a>
                  <a type ="button" className="btn" onClick={this.handleClickIngredients} id="Ingredients">Ingredients</a>
                  <a type ="button" className="btn" onClick={this.handleClickWholeRecipe} id="Whole Recipe">Whole Recipe</a>
              </div>
              <div className= "col-xs-12 col-sm-3 col-md-2 col-lg-2"></div>

          </div>
            <div className="row well ">
              <div className= "col-xs-12 col-sm-6 col-md-4 col-lg-4"></div>
              <div className= "col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className={`thumbnail ${spinnerClass}`}> <img width="300" height="400" src={recipePage_image_path} alt={thumbnailAlt} onClick={this.startListening}/>
                </div>
              </div>
              <div className= "col-xs-12 col-sm-6 col-md-4 col-lg-4"></div>
            </div>

            <div className="row well text-justify menu">
              {/*<div className= " well col-xs-12 col-sm-12 col-md-1 col-lg-2"></div>*/}
              <div>
                <h2 className="text-center">{name}</h2>
                <h4 className="text-justify">{notes}</h4>

                <h4><b className="bold">Cooking time</b>:{cooking_time}</h4>
                <div>
                  <h3>Ingredients</h3>
                  <ul>{this.getIngredients(ingredients)}</ul>
                </div>

                <div>
                  <h3>Method</h3>
                  <ul>{this.getInstructions(instructions)}</ul>
                </div>
                {this.checkReady()}
                {/*<div className= "col-xs-12 col-sm-12 col-md-1 col-lg-2"></div>*/}
              </div>
            </div>

        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  //bindActionCreators is unknown. keep in mind
  return bindActionCreators(
    {
      nextDispatch,
      previousDispatch,
      repeatDispatch,
      stopDispatch,
      fetchRecipe,
      wholeRecipeDispatch,
      ingredientsDispatch,
      listeningDispatch
    },
    dispatch
  )
  }

const mapStateToProps = (state) => {
  return {
    data: state.recipe
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe)
