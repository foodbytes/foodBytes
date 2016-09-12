var test = require('tape')
import reducer from '../../reducers'
var freeze = require('deep-freeze')
import {initialState} from '../../initialstate/initialstate.js'
import {NEXT, REPEAT, PREVIOUS, WHOLE_RECIPE, INGREDIENTS, RECEIVE_RECIPE_STEPS} from '../../actions/actionCreators'


test('reducer with basic PREVIOUS action', t=> {
  var action = {
    type: PREVIOUS
  }
  var fakeState = {
    recipe:{
      id: 0,
      currentStep: 3,
      length: 5
    }
  }

  freeze(initialState)

  var expectedState = {
    recipe:{
      id: 0,
      currentStep: 2,
      length: 5
    },
    routing:{
      locationBeforeTransitions: null
    }
  }

  var actualState = reducer(fakeState, action)
  t.deepEqual(actualState, expectedState, 'the reducer decreases current step by 1')
  t.end()
})
