import { initialState } from '../initialstate/initialstate'
import {NEXT, REPEAT, PREVIOUS, WHOLE_RECIPE, INGREDIENTS, RECEIVE_RECIPE_STEPS} from '../actions/actionCreators'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'



const recipe = (state = initialState, action) => {
  let length
  let newState

  switch (action.type){
    case RECEIVE_RECIPE_STEPS:
    console.log('Inside RECEIVE_RECIPE_STEPS');
      length = action.payload.instructions.length
      let apiData = Object.assign({}, action.payload, {length: length}, {currentStep: 0})
      newState = Object.assign({}, state, apiData)
      return newState

    case NEXT:
    console.log('Inside NEXT');
      if (state.currentStep === state.length -1) return state
      newState = Object.assign({}, {audio_path: state.audio_path}, {playing: true}, {currentStep: state.currentStep + 1})
      return newState

    case PREVIOUS:
      console.log('Inside PREVIOUS');
      if (state.currentStep === state.currentStep[0]) return state
      newState = Object.assign({}, {audio_path: state.audio_path}, {playing: true}, {currentStep: state.currentStep - 1})
      return newState

    case REPEAT:
      console.log('Inside REPEAT');
      newState = Object.assign({}, {audio_path: state.audio_path}, {playing: true}, {currentStep: state.currentStep})
      return newState

    case WHOLE_RECIPE:
      console.log('Inside WHOLE_RECIPE');
      newState = Object.assign({}, {audio_path: state.audio_path}, {playing: true}, {currentStep: state.currentStep})
      return newState

    case INGREDIENTS:
      console.log('Inside REPEAT');
      newState = Object.assign({}, {audio_path: state.audio_path}, {playing: true}, {currentStep: state.currentStep})
      return newState

    default:
      return state
    }
  }

const reducer = combineReducers({
  recipe,
  routing: routerReducer
})

export default reducer
