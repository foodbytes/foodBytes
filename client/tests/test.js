let request = require('supertest')
let test = require('tape')
let freeze = require('deep-freeze')

let reducer = require('../reducers/reducer.js')

test('testing', function (t) {
  t.ok(true)
  t.end()
})

let initialState = {
  recipe:{
    id: 0,
    name: '',
    description: '',
    ingredients: '',
    cooktime: '',
    length: 0,
    currentStep:0,
    steps:[]
  }
}

freeze(initialState)

let expectedState = {
  recipe:{
    id: 0,
    name: '',
    description: '',
    ingredients: '',
    cooktime: '',
    length: 0,
    currentStep:1,
    steps:[]
  }
}

test('NEXT increases current step by 1', action)
t.equal(currentState, expectedState)
