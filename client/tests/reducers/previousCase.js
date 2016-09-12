var test = require('tape')
import reducer from '../../reducers'
var freeze = require('deep-freeze')
import {initialState} from '../../initialstate/initialstate.js'
import {previousDispatch, fetchRecipe} from '../../actions/actionCreators.js'
import {NEXT, REPEAT, PREVIOUS, WHOLE_RECIPE, INGREDIENTS, RECEIVE_RECIPE_STEPS} from '../../actions/actionCreators'


test('reducer with basic PREVIOUS action', t=> {

  var fakeState = {
    recipe: {
id: 0,
name: "Grilled cheese sandwich",
description: "Indulge in an heavenly melt of cheese grilled in delicious slices",
notes: "Cheddar cheese with brown bread works as well",
ingredients: "Two slices of cheddar or swiss cheese@Two slices of white bread@Two tablespoons of butter",
cooking_time: "10 mins",
currentStep: 1,
length: 3,
whole_recipe_audio_path: "../audio/wholeRecipe.mp3",
ingredients_audio_path: "../audio/ingredients.mp3",
instructions: [
"Step One: Put the cheese between the slices of bread ",
"Step Two: Heat a fry pan to a hot temperature",
"Step Three: Heat one tablespoon of butter in the fry pan"
],
audio_path: [
"../audio/stepOne.mp3",
"../audio/stepTwo.mp3",
"../audio/stepThree.mp3"
]
}
}

  freeze(fakeState)

  var action = previousDispatch(fakeState)
  var expectedState = {
      recipe: {
        audio_path: [ '../audio/stepOne.mp3', '../audio/stepTwo.mp3', '../audio/stepThree.mp3' ],
        cooking_time: '10 mins',
        currentStep: 1,
        description: 'Indulge in an heavenly melt of cheese grilled in delicious slices',
        id: 0,
        ingredients: 'Two slices of cheddar or swiss cheese@Two slices of white bread@Two tablespoons of butter',
        ingredients_audio_path: '../audio/ingredients.mp3',
        instructions: [
          'Step One: Put the cheese between the slices of bread ',
          'Step Two: Heat a fry pan to a hot temperature',
          'Step Three: Heat one tablespoon of butter in the fry pan' ],
        length: 3, name: 'Grilled cheese sandwich',
        notes: 'Cheddar cheese with brown bread works as well',
        whole_recipe_audio_path: '../audio/wholeRecipe.mp3'
      },
      routing: { locationBeforeTransitions: null }
  }

  var actualState = reducer(fakeState, action)
  console.log(action, actualState)
  t.deepEqual(actualState, expectedState, 'the reducer decreases current step by 1')
  t.end()
})
