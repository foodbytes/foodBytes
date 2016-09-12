import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchRecipes } from '../actions/actionCreators'
import { Router, Route, hashHistory, Link } from 'react-router'
import RecipeList from './RecipeList'
import Nav from './layout/Nav';

class App extends Component {

  componentDidMount () {
    const { fetchRecipes } = this.props
    fetchRecipes()
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
  return bindActionCreators({ fetchRecipes }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
