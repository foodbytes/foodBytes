import React, { Component } from 'react'
import { connect } from 'react-redux'

import RecipeThumbnail from './RecipeThumbnail'

// this should be a functional component (dumb)

class RecipeList extends Component {

  render () {
    let { recipes } = this.props
    recipes = recipes || []

    return (
      <div className="jumbotron">
        <div className="page-header">
          <h1 className="text-center">Recipes List</h1>
        </div>
        {
          recipes.map( (recipe)=> <RecipeThumbnail recipe={recipe} key={recipe.id}/> )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.recipe
}

export default connect(
  mapStateToProps
)(RecipeList)
