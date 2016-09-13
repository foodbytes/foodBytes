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
    this.props.repeatDispatch(this.props.data.audio_path)
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
    const { playing } = this.props.data
    if (playing !== undefined) {
      return <Audio currentStep={this.props.data.currentStep} audio_path={this.props.data.audio_path[this.props.data.currentStep - 1]} playing={playing}/>
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
    // speechRecognition(this.props)

  }

  componentWillUnmount () {
    // later
    // destroy the listeners
  }

  isListening() {

    if (this.props.data.listening !== true){
      return <img src='../images/not_listening.png' alt='not_listening_red' />
    } else {
      return <img src='../images/listening.png' alt='listening_green' />
    }
  }

  render(){
    const { cooking_time, ingredients, instructions, image_path } = this.props.data
    // console.log("Ohh yeah", ingredients);
    return (
      <div className="jumbotron">
        <Listener />
        <div className="row well">
          <div className= "col-xs-12 col-sm-6 col-md-3 col-lg-3"></div>
          <div className= "col-xs-12 col-sm-6 col-md-6 col-lg-7">
            <h5>Available Commands: 'Next' 'Previous' 'Repeat'</h5>
            <h5>Click here and start talkin!</h5>
            <button onClick={this.startListening} id="speech" >Start</button>
            <h5>Available Commands: 'Next' 'Previous' 'Repeat'</h5>
            {this.isListening()}
          </div>
          <div className= "col-xs-12 col-sm-6 col-md-3 col-lg-3"></div>
        </div>

        <div className="row well">
          <div className= "col-xs-12 col-sm-2 col-md-3 col-lg-3"></div>
          <div className="col-xs-12 col-sm-8 col-md-6 col-lg-6">
            <div className="btn-group-justified">
              <button onClick={this.handleClickNext} id="next" >Next</button>
              <button onClick={this.handleClickPrevious} id="Previous" >Previous</button>
              <button onClick={this.handleClickRepeat} id="Repeat" >Repeat</button>
              <button onClick={this.handleClickStop} id="Stop" >Stop</button>
              <button onClick={this.handleClickWholeRecipe} id="Whole Recipe" >Whole Recipe</button>
              <button onClick={this.handleClickIngredients} id="Ingredients" >Ingredients</button>
            </div>
            <div className= "col-xs-12 col-sm-2 col-md-3 col-lg-3"></div>
          </div>
        </div>

        <div className="row well">
          <div className= "col-xs-12 col-sm-2 col-md-3 col-lg-3">
            <div className="thumbnail">
              <img width ='300'height ='200'src={`${image_path}`} alt="sandwich"></img>
            </div>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-6 col-lg-6">

            <h3>Cook time: {cooking_time}</h3>
            <div>Ingredients
              <ul>
                {this.getIngredients(ingredients)}
              </ul>
            </div>
            <div>Method
              <ul>
                {this.getInstructions(instructions)}
              </ul>
            </div>
            {this.checkReady()}
            <div className= "col-xs-12 col-sm-2 col-md-3 col-lg-3"></div>
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
