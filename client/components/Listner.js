import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nextDispatch, previousDispatch, repeatDispatch, stopDispatch } from '../actions/actionCreators'
//, , fetchRecipe, wholeRecipeDispatch, ingredientsDispatch, listeningDispatch

class Listner extends Component {


  componentDidMount() {
    console.log('script')
    if (annyang && this.props.listening) {
      console.log('starting listening')
         // OPTIONAL: activate debug mode for detailed logging in the console
      annyang.debug();

      annyang.setLanguage('en-NZ');

      // Let's define our first command. First the text we expect, and then the function it should call
      var commands = {
        'cc next': () => { this.props.nextDispatch() },
        'cc previous': function() {
           console.log('PREV');
        }
      };
      // Add our commands to annyang
      annyang.addCommands(commands);

      // Start listening. You can call this here, or attach this call to an event, button, etc.
      annyang.start();
    }
  }

  componentWillUnmount() {
    if (annyang) anyang.abort()
  }

  render() {
    console.log('drawing Listener component')
    console.log('listening props', this.props.listening)
    return (
      <div>Listner {this.props.listening}</div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    listening: state.recipe.listening
  }
}

const mapDispatchToProps = (dispatch) => {
  //bindActionCreators is unknown. keep in mind
  return bindActionCreators(
    { nextDispatch,  previousDispatch, repeatDispatch, stopDispatch }, // , wholeRecipeDispatch, ingredientsDispatch, listeningDispatch
    dispatch
  )
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listner)



