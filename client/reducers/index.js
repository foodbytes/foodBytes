import { initialState } from '../initialstate/initialstate'
import { NEXT, REPEAT, PREVIOUS, STOP, WHOLE_RECIPE, LISTENING, INGREDIENTS, RECEIVE_RECIPE_STEPS, RECEIVE_ALL_RECIPES } from '../actions/actionCreators'
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

const START_STEP = 0
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

    case STOP:
      return Object.assign({},state,{audio_path: state.audio_path},{playing: false},{currentStep: state.currentStep})


    case REPEAT:
      console.log('Inside REPEAT');
      return Object.assign({}, {audio_path: state.audio_path}, {playing: true}, {currentStep: state.currentStep})

    case WHOLE_RECIPE:
      console.log('Inside WHOLE_RECIPE');
      return Object.assign({}, {audio_path: state.whole_recipe_audio_path}, {playing: true}, {currentStep: 0})

    case INGREDIENTS:
      console.log('Inside INGREDIENTS');
      return Object.assign({}, {audio_path: state.ingredients_audio_path}, {playing: true}, {currentStep: 0})

    case RECEIVE_ALL_RECIPES:
      return Object.assign({}, {recipes: [...action.payload]})

    case LISTENING:
    return Object.assign({}, state, {listening: true})

    default:
      return state
  }
}





const reducer = combineReducers({
  recipe,
  routing: routerReducer
})

export default reducer
