var reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT':

      const newRecipeState = Object.assign({}, state.recipe, {currentStep: state.recipe.currentStep +1})
      const newState = Object.assign({}, state, {recipe: newRecipeState})
      return newState


    default:
      return state

  }
}








// let initialState = require('../initialstate/initialstate')
//
export default reducer
