import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchRecipeSteps } from '../actions/actionCreators'
import { Router, Route, hashHistory, Link } from 'react-router'
import ContentsPage from './ContentsPage'
import Nav from './layout/Nav';

class App extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const { fetchRecipeSteps } = this.props
    const id = 0
    fetchRecipeSteps(id)
  }

  render() {
    const { location } = this.props;
    return (
      <div>
      {/* default nav bar */}
      <Nav />
        {this.props.children}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    data: state.recipe
  }
}

const mapDispatchToProps = (dispatch) => {
  //bindActionCreators is unknown. keep in mind
  return bindActionCreators({ fetchRecipeSteps }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
