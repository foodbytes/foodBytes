import React from 'react'
import speechRecognition from '../speechRecognition.js'
import Audio from './Audio'
import { bindActionCreators } from 'redux'
import { nextDispatch } from '../actions/actionCreators'
import { connect } from 'react-redux'


class RecipePage extends React.Component {

  checkReady(){
    console.log(this.props);
    const { playing } = this.props.data
    if (playing !== undefined) {
      console.log("What in playing?", playing);
      return <Audio currentStep={0} audio_path={'https://www.youtube.com/watch?v=2lmBUq1Zd34'} playing={playing}/>
    }
  }

  render(){
    return (
      <div className="jumbotron">
        {speechRecognition(this.props)}
        {/* This is the placeholder the button */}
        <button id="speech"></button>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="caption text-center">
              <h3>Food Bytes</h3>
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
  return bindActionCreators({ nextDispatch }, dispatch)
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
