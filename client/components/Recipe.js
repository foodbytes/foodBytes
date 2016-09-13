import React from 'react'
import speechRecognition from '../speechRecognition.js'
import { bindActionCreators } from 'redux'

import { nextDispatch, previousDispatch, repeatDispatch, stopDispatch, fetchRecipe, wholeRecipeDispatch, ingredientsDispatch, listeningDispatch } from '../actions/actionCreators'

import { connect } from 'react-redux'
import Audio from './Audio'



class Recipe extends React.Component {


  /* Checks if the data ready and if so then will create audio component and play the audio */
  constructor (props) {
    super(props)
    this.handleClickNext = this.handleClickNext.bind(this)
    this.handleClickPrevious = this.handleClickPrevious.bind(this)
    this.handleClickRepeat = this.handleClickRepeat.bind(this)
    this.handleClickStop = this.handleClickStop.bind(this)
    this.handleClickIngredients = this.handleClickIngredients.bind(this)
    this.handleClickWholeRecipe = this.handleClickWholeRecipe.bind(this)
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
      console.log(ingredientArray);
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
    speechRecognition(this.props)
  }

  componentWillUnmount () {
    // later
    // destroy the listeners
  }

  isListening() {

    if (this.props.data.listening !== true){
      console.log(this.props.data.listening)
      return <div className="thumbnail"> <img width="100" height="100" src='../images/not_listening.png'alt='not_listening_red'/>
      </div>
    }else {
      console.log(this.props.data.listening)
      return <div className="thumbnail"> <img  width="100" height="100" src='../images/listening.png' alt='listening_green' />
      </div>
    }
  }

  render(){
    const { cooking_time, ingredients, instructions, image_path, name, notes } = this.props.data
    // console.log("Ohh yeah", ingredients);
    return (

      <div className="jumbotron container">
                    {/* row commands*/}
          <div className="row well ">
              <div className="commands col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <a>Available commands:</a>
                  <a type ="button" className="btn" onClick={this.handleClickNext} id="next">Next</a>
                  <a type ="button" className="btn" onClick={this.handleClickPrevious} id="Previous">Previous</a>
                  <a type ="button" className="btn" onClick={this.handleClickRepeat} id="Repeat">Repeat</a>
                  <a type ="button" className="btn" onClick={this.handleClickIngredients} id="Ingredients">Ingredients</a>
                  <a type ="button" className="btn" onClick={this.handleClickWholeRecipe} id="Whole Recipe">Whole Recipe</a>
              </div>
          </div>
            <div className="row well ">
              <div className= "col-xs-12 col-sm-6 col-md-4 col-lg-4">{this.isListening()}</div>
              <div className= "col-xs-12 col-sm-6 col-md-4 col-lg-4">{this.isListening()}</div>
              <div className= "col-xs-12 col-sm-6 col-md-4 col-lg-4">{this.isListening()}</div>
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
  return bindActionCreators({ nextDispatch,  previousDispatch, repeatDispatch, stopDispatch, fetchRecipe, wholeRecipeDispatch, ingredientsDispatch, listeningDispatch }, dispatch)
}

const mapStateToProps = (state) => {
console.log("the state in recipe is ", state);
  return {
    data: state.recipe
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe)
