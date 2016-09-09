var test = require('tape')
import reducer from '../../reducers/reducer.js'
var freeze = require('deep-freeze')

test('reducer with basic PREVIOUS action', t=> {
  var action = {
    type: 'PREVIOUS'
  }
  var initialState = {
    recipe:{
      id: 0,
      currentStep: 5,
      length: 5
    }
  }

  freeze(initialState)

  var expectedState = {
    recipe:{
      id: 0,
      currentStep: 4,
      length: 5
    }
  }

  var actualState = reducer(initialState, action)
  t.deepEqual(actualState, expectedState, 'the reducer decreases current step by 1')
  t.end()
})
