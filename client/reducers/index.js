import { initialState } from '../initialstate/initialstate'
import { NEXT, REPEAT, PREVIOUS, STOP, WHOLE_RECIPE, LISTENING, INGREDIENTS, RECEIVE_RECIPE_STEPS, RECEIVE_ALL_RECIPES } from '../actions/actionCreators'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


const moveStep = (state, stepIncrement) => {
  console.log("the state inside moveStep", state);
  return Object.assign(
    {},
    state,
    {active_audio_path: state.steps_audio_path},
    {playing: true},
    {currentStep: state.currentStep + stepIncrement}
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
      length = action.payload.instructions.length
      let apiData = Object.assign({}, action.payload, {length: length}, {currentStep: 0}, {listening: false})

      return Object.assign({}, state, apiData)

    case NEXT:
      if (isAtEnd(state) && typeof(active_audio_path)!=='string') return state

      return moveStep(state, 1)

    case PREVIOUS:
      if (isAtStart(state)) return state

      return moveStep(state, -1)

    case STOP:
      return Object.assign({},state,{playing: false})


    case REPEAT:
      console.log('Inside REPEAT');

      return Object.assign({}, state, {active_audio_path: state.steps_audio_path}, {playing: true}, {currentStep: state.currentStep})

    case WHOLE_RECIPE:
      console.log('Inside WHOLE_RECIPE');
      return Object.assign({}, state, {active_audio_path: state.whole_recipe_audio_path}, {playing: true})


    case INGREDIENTS:
      console.log('Inside INGREDIENTS');
      return Object.assign({}, state, {active_audio_path: state.ingredients_audio_path}, {playing: true})

    case LISTENING:
      const payload = action.payload || !state.listening

      return Object.assign({}, state, {listening: payload})

    default:
      return state
  }
}

const reducer = combineReducers({
  recipe,
  routing: routerReducer
})

export default reducer
