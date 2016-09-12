var test = require('tape')
import reducer from '../../reducers'
var freeze = require('deep-freeze')

test('reducer with basic REPEAT action', t=> {
  var action = {
    type: 'REPEAT'
  }
  var initialState = {
    recipe:{
      id: 0,
      currentStep:0,
    }
  }

  freeze(initialState)

  var expectedState = {
    recipe:{
      id: 0,
      currentStep:0,
    },
    routing:{
      locationBeforeTransitions: null
    }
  }

  var actualState = reducer(initialState, action)
  t.deepEqual(actualState, expectedState, 'the reducer repeats the current step')
  t.end()
})
