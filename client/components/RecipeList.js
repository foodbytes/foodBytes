import React, { Component } from 'react'
import { connect } from 'react-redux'

import RecipeThumbnail from './RecipeThumbnail'

class RecipeList extends Component {

  render () {
    return (
      <div className="jumbotron">
        <div className="page-header">
          <h1 className="text-center">Recipes List</h1>
        </div>

        {
          this.props.recipes.map(
              (recipe)=> <RecipeThumbnail recipe={recipe} key={recipe.id}/>
          )
        }



      </div>
    )
  }
}


const mapStateToProps = (state) => {

  console.log("this is the new state of the recipeList", state);
  return {
    // recipes: state.recipes
    // ultimately, the state should have an overview of all the recipes available. for the moment we've hard coded them in here
    recipes: [{
      id: 0,
      name: "Grilled Cheese",
    }, {
      id: 1,
      name: "Quesidilla",
    }]
  }
}

export default connect(
  mapStateToProps
)(RecipeList)
