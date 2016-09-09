var test = require('tape')
import reducer from '../../reducers/reducer.js'
var freeze = require('deep-freeze')

test('reducer with basic NEXT action', t=> {
  var action = {
    type: 'NEXT'
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
      currentStep:1,
    }
  }

  var actualState = reducer(initialState, action)
  t.deepEqual(actualState, expectedState, 'the reducer increments the current step')
  t.end()
})

test('reducer with basic NEXT action when called at end of recipe steps', t=> {
  var action = {
    type: 'NEXT'
  }
  var initialState = {
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
    }
  }

  var actualState = reducer(initialState, action)
  t.deepEqual(actualState, expectedState, 'the reducer does nothing')
  t.end()
})
