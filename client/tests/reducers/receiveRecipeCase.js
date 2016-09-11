const request = require('supertest')
const test = require('tape')
const freeze = require('deep-freeze')
import reducer from '../../reducers'
import {receiveRecipeSteps, fetchRecipe} from '../../actions/actionCreators.js'
import {initialState} from '../../initialstate/initialstate.js'

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
//     audio_path:[]
//   }
// }

freeze(initialState)

test('we send an empty action', t => {
  var emptyAction = {}

  var newState = reducer(initialState, emptyAction)
  t.deepEqual(newState, initialState, 'we expect the state to be unchanged')

  t.end()
})

test('we send the receiveRecipeSteps action to the reducer to get a filled state.', t => {

  var apiData = {
    id: 0,
    name: 'Grilled cheese sandwich',
    description: 'Indulge in an heavenly melt of cheese grilled in delicious slices',
    ingredients: 'Two slices of cheddar or swiss cheese,Two slices of white bread,Two tablespoons of butter',
    cooking_time: '10 mins',
    instructions:['step one', 'step two', 'step three'],
    audio_path:['../audio/stepOne.mp3', '../audio/stepTwo.mp3', '../audio/stepThree.mp3']
  }
  var action = receiveRecipeSteps(apiData)

  var newState = reducer(initialState, action)
  var expectedState = {
  recipe:{
    id: 0,
    name: 'Grilled cheese sandwich',
    description: 'Indulge in an heavenly melt of cheese grilled in delicious slices',
    ingredients: 'Two slices of cheddar or swiss cheese,Two slices of white bread,Two tablespoons of butter',
    cooking_time: '10 mins',
    length: 3,
    currentStep:0,
    instructions:['step one', 'step two', 'step three'],
    audio_path:['../audio/stepOne.mp3', '../audio/stepTwo.mp3', '../audio/stepThree.mp3']
  }
}

  t.deepEqual(newState, expectedState, 'we expect the state to have a new set of data.')

  t.end()
})

test('we send the fetchRecipe action to add api data to the reducer to fill the state.', t => {
  var id = 0
  var action = fetchRecipe(id)
  var newState = reducer(initialState, action)
  var expectedState = {
  recipe:{
    id: 0,
    name: 'Grilled cheese sandwich',
    description: 'Indulge in an heavenly melt of cheese grilled in delicious slices',
    ingredients: 'Two slices of cheddar or swiss cheese,Two slices of white bread,Two tablespoons of butter',
    cooking_time: '10 mins',
    length: 3,
    currentStep:0,
    instructions:['step one', 'step two', 'step three'],
    audio_path:['../audio/stepOne.mp3', '../audio/stepTwo.mp3', '../audio/stepThree.mp3']
  }
}

  t.deepEqual(newState, expectedState, 'we expect the state to have a new set of data populated by the api')

  t.end()
})
