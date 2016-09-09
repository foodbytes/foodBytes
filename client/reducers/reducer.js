import initialState from '../initialstate/initialstate'
import {NEXT, PREVIOUS, RECEIVE_RECIPE_STEPS} from '../actions/actionCreators'

export default (state = initialState, action) => {
  let newState;
    switch (action.type){
      case RECEIVE_RECIPE_STEPS:
        let apiData = action.payload
        let length = apiData.instructions.length
        newState = [...state.recipe, apiData]
        console.log('this is the newState ', newState);
        return Object.assign({}, newState, {length: length})

      case NEXT:
        if (state.recipe.currentStep === state.recipe.length -1) return state

        let newRecipeState = Object.assign({}, state.recipe, {currentStep: state.recipe.currentStep +1})
        newState = Object.assign({}, state, {recipe: newRecipeState})
        return newState
      default:
        console.log('this is the default');
        return state
    }
  }
