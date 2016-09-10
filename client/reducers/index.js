import { initialState } from '../initialstate/initialstate'
import {NEXT, REPEAT, PREVIOUS, RECEIVE_RECIPE_STEPS} from '../actions/actionCreators'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'



const recipe = (state = initialState, action) => {
  let length
  let newState

  switch (action.type){
    case RECEIVE_RECIPE_STEPS:
      length = action.payload.instructions.length
      let apiData = Object.assign({}, action.payload, {length: length}, {currentStep: 0})
      //console.log('this is the api.data ', apiData);
      newState = Object.assign({}, state, apiData)
      console.log('this is the newState inside the recipe ',newState);
      return newState

    case NEXT:
    console.log("inside next reducer");
      if (state.currentStep === state.length -1) return state
      length = action.payload.audio_path.length
      let newRecipeState = Object.assign({}, state, {currentStep: state.currentStep +1})
      let nextState = Object.assign({}, state, newRecipeState)
      for (var i = 0; i<length; i++){
        if (currentStep = i) {
          console.log('next reducer as expected',nextState.recipe.audio_path[i]);

          return nextState.recipe.audio_path[i - 1]
        }
        else {
          console.log('XOXO next reducer sucks',nextState.audio_path[i]);
          return nextState.audio_path[0]
        }
      }
      // return nextState

    case REPEAT:
      return state

    case PREVIOUS:
      if (state.currentStep === state.currentStep[0]) return state

      let previousRecipeState = Object.assign({}, state, {currentStep: state.currentStep -1})
      let previousState = Object.assign({}, state, previousRecipeState)
      return previousState

    default:
    // console.log('this is the default');
      return state
    }
  }

const reducer = combineReducers({
  recipe,
  routing: routerReducer
})

export default reducer
