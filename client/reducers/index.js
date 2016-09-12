import { initialState } from '../initialstate/initialstate'
import { NEXT, REPEAT, PREVIOUS, WHOLE_RECIPE, INGREDIENTS, RECEIVE_RECIPE_STEPS, RECEIVE_ALL_RECIPES } from '../actions/actionCreators'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


const moveStep = (state, stepIncrement) => {
  console.log("the state inside moveStep", state);
  return Object.assign(
    {},
    state,
    {audio_path: state.audio_path},
    {playing: true},
    {currentStep: state.currentStep + stepIncrement}
  )

}

const START_STEP = 2
const isAtStart = (state) => state.currentStep === START_STEP  // NOTE: CHECK THIS
const isAtEnd   = (state) => state.currentStep === state.length -1


const recipe = (state = initialState, action) => {
  let length

  switch (action.type){

    case RECEIVE_RECIPE_STEPS:
      length = action.payload.instructions.length
      let apiData = Object.assign({}, action.payload, {length: length}, {currentStep: 0})

      return Object.assign({}, state, apiData)

    case NEXT:
      if (isAtEnd(state)) return state

      return moveStep(state, 1)


    case PREVIOUS:
      if (isAtStart(state)) return state

      return moveStep(state, -1)


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

    case RECEIVE_ALL_RECIPES:
    return Object.assign({}, {recipes: [...action.payload]})

    default:
      return state
  }
}





const reducer = combineReducers({
  recipe,
  routing: routerReducer
})

export default reducer
