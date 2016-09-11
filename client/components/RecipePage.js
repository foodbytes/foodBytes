import React from 'react'
import speechRecognition from '../speechRecognition.js'
import Audio from './Audio'
import { bindActionCreators } from 'redux'
import { nextDispatch, previousDispatch, repeatDispatch, wholeRecipeDispatch, ingredientsDispatch } from '../actions/actionCreators'
import { connect } from 'react-redux'


class RecipePage extends React.Component {

  constructor (props) {
    super(props)
    this.handleClickNext = this.handleClickNext.bind(this)
    this.handleClickPrevious = this.handleClickPrevious.bind(this)
    this.handleClickRepeat = this.handleClickRepeat.bind(this)
  }

  handleClickNext() {
    this.props.nextDispatch(this.props.data.audio_path)
  }

  handleClickPrevious() {
    this.props.previousDispatch(this.props.data.audio_path)
  }

  handleClickRepeat() {
    this.props.RepeatDispatch(this.props.data.audio_path)
  }

  checkReady(){
    const { playing } = this.props.data
    if (playing !== undefined) {
      console.log("What is playing? ", playing)
      console.log('This is the audio being played ', this.props.data.audio_path[this.props.data.currentStep - 1])
      return <Audio currentStep={this.props.data.currentStep} audio_path={this.props.data.audio_path[this.props.data.currentStep - 1]} playing={playing}/>
    }
  }

  render(){
    return (
      <div className="jumbotron">
        {speechRecognition(this.props)}
        {/* This is the placeholder the button */}
        <h5>Click here and start talkin!</h5>
        <button id="speech">Start</button>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="caption text-center">
              <h3>Food Bytes</h3>
            </div>
            <div>
              <h5>Available Commands: 'Next' 'Previous' 'Repeat'</h5>
              <div onClick={this.handleClickNext}>
                <button id="next" >Next</button>
              </div>
              <div onClick={this.handleClickPrevious}>
                <button id="Previous" >Previous</button>
              </div>
              <div onClick={this.handleClickRepeat}>
                <button id="Repeat" >Repeat</button>
              </div>
            </div>
           <div className="thumbnail">
             <img src="http://cook.sndimg.com/content/dam/images/cook/fullset/2012/9/24/0/CC-kelsey-nixon_grilled-cheese-sandwich-recipe-02_s4x3.jpg/jcr:content/renditions/cq5dam.web.266.200.jpeg" alt="sandwich" ></img>
           </div>
          </div>
        </div>
        <h3>Cook time: </h3>
        <h3>Ingredients: </h3>
        <h3>Instructions: </h3>
        {this.checkReady()}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  //bindActionCreators is unknown. keep in mind
  return bindActionCreators({ nextDispatch,  previousDispatch, repeatDispatch, wholeRecipeDispatch, ingredientsDispatch }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    data: state.recipe
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipePage)
