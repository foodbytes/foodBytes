var reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT':
      if (state.recipe.currentStep === state.recipe.length -1) return state

      const newRecipeState = Object.assign({}, state.recipe, {currentStep: state.recipe.currentStep +1})
      const newState = Object.assign({}, state, {recipe: newRecipeState})
      return newState

    case 'REPEAT':
      return state

    case 'PREVIOUS':
      if (state.recipe.currentStep === state.recipe.currentStep[0]) return state

      const previousRecipeState = Object.assign({}, state.recipe, {currentStep: state.recipe.currentStep -1})
      const previousState = Object.assign({}, state, {recipe: previousRecipeState})
      return previousState

    default:
      return state

  }
}








// let initialState = require('../initialstate/initialstate')
//
export default reducer
