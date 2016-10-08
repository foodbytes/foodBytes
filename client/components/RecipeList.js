import React, { Component } from 'react'
import { connect } from 'react-redux'

import RecipeThumbnail from './RecipeThumbnail'

  function RecipeList(props) {
    const recipes = props.recipes || []
    return(
      <div className="jumbotron">
        <div className="page-header">
          <h1 className="text-center">Recipes</h1>
        </div>
        {
          recipes.map((recipe)=> <RecipeThumbnail recipe={recipe} key={recipe.id}/>)
        }
      </div>
    )
}

const mapStateToProps = (state) => {
  return state.recipe
}

export default connect(
  mapStateToProps
)(RecipeList)
