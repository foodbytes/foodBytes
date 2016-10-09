import { initialState } from '../initialstate/initialstate'
import { START, NEXT, REPEAT, PREVIOUS, STOP, WHOLE_RECIPE, LISTENING, INGREDIENTS, RECEIVE_RECIPE_STEPS, RECEIVE_ALL_RECIPES, HIGHLIGHT_NEXT_TEXT } from '../actions/actionCreators'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


const moveStep = (state, stepIncrement) => {
  return Object.assign(
    {},
    state,
    {active_audio_path: state.steps_audio_path},
    {playing: true},
    {currentStep: state.currentStep + stepIncrement}
  )
}

const repeatStep = (state, payload) => {
  return Object.assign(
    {},
    state,
    {active_audio_path: state.active_audio_path},
    {playing: payload},
  )
}

const START_STEP = 0
const isAtStart = (state) => state.currentStep === START_STEP  // NOTE: CHECK THIS
const isAtEnd   = (state) => state.currentStep === state.length


const recipe = (state = initialState, action) => {

  let length
  switch (action.type){

    case RECEIVE_ALL_RECIPES:
      return Object.assign({}, {recipes: [...action.payload]})
    case RECEIVE_RECIPE_STEPS:
      length = action.payload.steps_audio_path.length
      let apiData = Object.assign({}, action.payload, {length: length}, {currentStep: 0})
      return Object.assign({}, state, apiData)
    case START:
      return Object.assign({}, {active_audio_path: state.steps_audio_path[0]}, {playing: true}, {currentStep: 2}, state)
    case NEXT:
      if (isAtEnd(state) && typeof(active_audio_path) !=='string') return state
      return moveStep(state, 1)
    case PREVIOUS:
      if (isAtStart(state)) return state
      return moveStep(state, -1)
    case STOP:
      return Object.assign({},state,{playing: false})
    case REPEAT:
      return repeatStep(state, action.payload);
    case WHOLE_RECIPE:
      return Object.assign({}, state, {active_audio_path: state.whole_recipe_audio_path}, {playing: true})
    case INGREDIENTS:
      return Object.assign({}, state, {active_audio_path: state.ingredients_audio_path}, {playing: true})
    case LISTENING:
      const payload = action.payload || !state.listening
      return Object.assign({}, state, {listening: payload})
    case HIGHLIGHT_NEXT_TEXT:
      return null

    default:
      return state
  }
}

const reducer = combineReducers({
  recipe,
  routing: routerReducer
})

export default reducer
