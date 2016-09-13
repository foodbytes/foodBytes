var test = require('tape')
import reducer from '../../reducers'
var freeze = require('deep-freeze')
import {initialState} from '../../initialstate/initialstate.js'
import {NEXT, REPEAT, PREVIOUS, WHOLE_RECIPE, INGREDIENTS, RECEIVE_RECIPE_STEPS} from '../../actions/actionCreators'

// const initialState = {
//   recipe:{
//     id: 0,
//     name: '',
//     description: '',
//     ingredients: '',
//     cooking_time: '',
//     length: 0,
//     currentStep:0,
//     instructions:[],
//     steps_audio_path:[]
//   }
// }

test('reducer with basic NEXT action', t=> {
  var action = {
    type: NEXT
  }

  freeze(initialState)

  var expectedState = {
    recipe: {
      steps_audio_path: [],
      cooking_time: '',
      currentStep: 1,
      description: '',
      id: 0, ingredients: '',
      instructions: [],
      length: 0,
      listening: false,
      name: '',
      playing: true
    },
    routing: {
      locationBeforeTransitions: null
    }
  }

  var actualState = reducer(initialState, action)
  t.deepEqual(actualState, expectedState, 'the reducer increments the current step')
  t.end()
})

test('reducer with basic NEXT action when called at end of recipe steps', t=> {
  var action = {
    type: NEXT
  }
  var fakeState = {
    recipe:{
      id: 0,
      currentStep: 4,
      length: 5
    }
  }

  freeze(initialState)

  var expectedState = {
    recipe:{
      id: 0,
      currentStep: 4,
      length: 5
    },
    routing:{
      locationBeforeTransitions: null
    }
  }

  var actualState = reducer(fakeState, action)
  t.deepEqual(actualState, expectedState, 'the reducer does nothing')
  t.end()
})
