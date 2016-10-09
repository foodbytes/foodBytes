import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { startDispatch, nextDispatch, previousDispatch, repeatDispatch, stopDispatch, ingredientsDispatch,  } from '../actions/actionCreators'

class Listener extends Component {

  componentDidMount() {
    if (annyang) {
      console.log('starting listening')
      annyang.debug()
      annyang.setLanguage('en-NZ')
      var commands = {
        /* cc start set to call nextDispatch for presentation only! */
        'cc start': () => { this.props.nextDispatch() },
        'cc next': () => { this.props.nextDispatch() },
        'cc previous': () => { this.props.previousDispatch() },
        'cc repeat': () => { this.props.repeatDispatch(true) },
        'cc ingredients': () => { this.props.ingredientsDispatch(this.props.ingredients_audio_path) }
      }
      annyang.addCommands(commands);
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('Listener receiving new props', nextProps.listening)
    if (nextProps.listening) {
      console.log('annyang starting')
      annyang.start()
    } else {
      console.log('annyang pausing')
      annyang.abort()

    }
  }

  componentWillUnmount() {
    if (annyang) annyang.abort()
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listening: state.recipe.listening,
    ingredients_audio_path: state.recipe.ingredients_audio_path
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { startDispatch, nextDispatch,  previousDispatch, repeatDispatch, stopDispatch, ingredientsDispatch }, // , wholeRecipeDispatch, ingredientsDispatch, listeningDispatch
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listener)
