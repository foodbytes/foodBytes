let request = require('supertest')
let test = require('tape')
let freeze = require('deep-freeze')

// let reducer = require('../reducers/onRecognition.js')

test('testing', function (t) {
  t.ok(true)
  t.end()
})

var currentState = {
  recipe:{
    id: 0,
    currentStep:0,
  }
}

// freeze(initialState)

var expectedState = {
  recipe:{
    id: 0,
    currentStep:1,
  }
}
//
test('this test should fail', function (t) {
  t.equal(currentState, expectedState)
  t.end()
})
