import React from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listeningDispatch, repeatDispatch } from '../actions/actionCreators'

class Audio extends React.Component {

  stopListening() {
    this.props.listeningDispatch(false)
  }

  startListening() {
    this.props.listeningDispatch(true)
    this.props.repeatDispatch(false)
  }

  render() {
    const {active_audio_path, playing} = this.props

    return (
      <div className="hidden">
        <ReactPlayer
          url={active_audio_path}
          playing={playing}
          onStart={this.stopListening.bind(this)}
          onEnded={this.startListening.bind(this)}
          />
      </div>
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
    { listeningDispatch, repeatDispatch },
    dispatch
  )
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Audio)
