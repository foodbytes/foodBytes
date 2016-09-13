import React from 'react'
import speechRecognition from '../speechRecognition.js'
import { bindActionCreators } from 'redux'

import { nextDispatch, previousDispatch, repeatDispatch, stopDispatch, fetchRecipe, wholeRecipeDispatch, ingredientsDispatch, listeningDispatch, fetchNextRecipeStep } from '../actions/actionCreators'

import { connect } from 'react-redux'
import Audio from './Audio'



class Recipe extends React.Component {

  //const id = this.props.params.id
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
    let id = this.props.params.id
    this.props.fetchNextRecipeStep(id)
  }

  handleClickPrevious() {
    this.props.previousDispatch(this.props.data.steps_audio_path)
  }

  handleClickRepeat() {
    this.props.repeatDispatch(this.props.data.steps_audio_path)
  }

  handleClickStop() {
    this.props.stopDispatch(this.props.data.steps_audio_path)
  }

  handleClickIngredients() {
    this.props.ingredientsDispatch(this.props.data.steps_audio_path)
  }

  handleClickWholeRecipe() {
    this.props.wholeRecipeDispatch(this.props.data.steps_audio_path)
  }

  checkReady(){
    const { playing } = this.props.data
    if (playing !== undefined) {
      console.log('This is the data before Audio ', this.props.data.active_audio_path);
      if (typeof(this.props.data.active_audio_path) === 'string') {
      return <Audio currentStep={this.props.data.currentStep} active_audio_path={this.props.data.active_audio_path} playing={playing}/>
      }
      return <Audio currentStep={this.props.data.currentStep} active_audio_path={this.props.data.active_audio_path[this.props.data.currentStep - 1]} playing={playing}/>

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
    let id = this.props.params.id

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
      return <div> <img width="100" height="100" src='../images/not_listening.png'alt='not_listening_red'/>
      <h5>Click me to take your command</h5>
      </div>
    }else {
      console.log(this.props.data.listening)
      return <div> <img width="100" height="100" src='../images/listening.png' alt='listening_green' />
      <h5>I am now listening</h5>
      <h5>Say Next or click the next button</h5>

      </div>
    }
  }

  render(){
    const { cooking_time, ingredients, instructions, image_path } = this.props.data
    return (
      <div className="container">
          <div className="row ">
              <div className="commands">
                  <a className="">Available commands:</a>
                  <a type ="button" className="btn" onClick={this.handleClickNext} id="next">Next</a>
                  <a type ="button" className="btn" onClick={this.handleClickPrevious} id="Previous">Previous</a>
                  <a type ="button" className="btn" onClick={this.handleClickRepeat} id="Repeat">Repeat</a>
                  <a type ="button" className="btn" onClick={this.handleClickIngredients} id="Ingredients">Ingredients</a>
                  <a type ="button" className="btn" onClick={this.handleClickWholeRecipe} id="Whole Recipe">Whole Recipe</a>
              </div>
          </div>

          <div className="jumbotron">

        <div className="row well">
        <div className= "col-xs-12 col-sm-6 col-md-3 col-lg-2">
          {this.isListening()}
          </div>
        </div>

        <div className="row well">
          <div className= " well col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <img width ='300'height ='200'src={`${image_path}`} alt="sandwich"></img>
          </div>
          <div className=" well col-xs-12 col-sm-6 col-md-5 col-lg-6">

                <h3>Cook time</h3>
                <h5>{cooking_time}</h5>
                <div>
                  <h3>Ingredients</h3>
                  <ul>
                   {this.getIngredients(ingredients)}
                  </ul>
                </div>
                <div>
                  <h3>Method</h3>
                  <ul>
                  {this.getInstructions(instructions)}
                  </ul>
                </div>
                {this.checkReady()}
                <div className= "col-xs-12 col-sm-6 col-md-3 col-lg-3"></div>
        </div>
      </div>
    </div>
    </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  //bindActionCreators is unknown. keep in mind
  return bindActionCreators({ nextDispatch,  previousDispatch, repeatDispatch, stopDispatch, fetchRecipe, wholeRecipeDispatch, ingredientsDispatch, listeningDispatch, fetchNextRecipeStep }, dispatch)
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
