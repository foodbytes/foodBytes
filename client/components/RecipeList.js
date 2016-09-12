import React, { Component } from 'react'
import { connect } from 'react-redux'

import RecipeThumbnail from './RecipeThumbnail'

class RecipeList extends Component {

  getRecipes(recipes){
    if (recipes) {
      return recipes.map(
        (recipe)=> <RecipeThumbnail recipe={recipe} key={recipe.id}/>
      )
    }
  }

  render () {

    const { recipes } = this.props

    return (
      <div className="jumbotron">
        <div className="page-header">
          <h1 className="text-center">Recipes List</h1>
        </div>
        {this.getRecipes(recipes)}
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
