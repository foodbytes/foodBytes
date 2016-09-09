import initialState from '../initialstate/initialstate'
import {NEXT, REPEAT, PREVIOUS, RECEIVE_RECIPE_STEPS} from '../actions/actionCreators'

export default (state = initialState, action) => {
  let newState
  switch (action.type){
    case RECEIVE_RECIPE_STEPS:
      let length = action.payload.instructions.length
      let apiData = Object.assign({}, action.payload, {length: length}, {currentStep: 0})
      //console.log('this is the api.data ', apiData);
      newState = Object.assign({}, state, {recipe: apiData})
      //console.log('this is the newState ',newState);
      return newState

    case NEXT:
      if (state.recipe.currentStep === state.recipe.length -1) return state

      let newRecipeState = Object.assign({}, state.recipe, {currentStep: state.recipe.currentStep +1})
      let nextState = Object.assign({}, state, {recipe: newRecipeState})
      return nextState

    case REPEAT:
      return state

    case PREVIOUS:
      if (state.recipe.currentStep === state.recipe.currentStep[0]) return state

      let previousRecipeState = Object.assign({}, state.recipe, {currentStep: state.recipe.currentStep -1})
      let previousState = Object.assign({}, state, {recipe: previousRecipeState})
      return previousState

    default:
    console.log('this is the default');
      return state
    }
  }
