import { initialState } from '../initialstate/initialstate'
import {NEXT, REPEAT, PREVIOUS, RECEIVE_RECIPE_STEPS} from '../actions/actionCreators'
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

    case NEXT://this should havea payload with the audio_path array from the nextDispatch action
    console.log('Inside NEXT');
      if (state.currentStep === state.length -1) return state
      console.log('!!!!!!!!!!!!!', action);
      length = action.payload.length
      let newState = Object.assign({}, {audio_path: [state.audio_path]}, {currentStep: state.currentStep + 1})

      console.log('next reducer as expected',newState)
      // for (var i = 0; i<length; i++){
      //   if (nextState.currentStep === i) {
      //     console.log('next reducer as expected',nextState.audio_path[i]);
      //
      //     return nextState.audio_path[i - 1]
      //   }
      //   else {
      //     console.log('XOXO next reducer sucks',nextState.audio_path[0]);
      //     return nextState.audio_path[0]
      //   }
      // }
      return newState

    case REPEAT:
      return state

    case PREVIOUS:
      if (state.currentStep === state.currentStep[0]) return state

      let previousRecipeState = Object.assign({}, state, {currentStep: state.currentStep -1})
      return previousState

    default:
      return state
    }
  }

const reducer = combineReducers({
  recipe,
  routing: routerReducer
})

export default reducer
