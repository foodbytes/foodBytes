const transformJoin = require('./transformjoin')

let test = require('tape')

let seedData = [
  {
    id: 1,
    name: 'Grilled cheese sandwich',
    description: 'Indulge in an heavenly melt of cheese grilled in delicious slices',
    cooking_time: '10 mins',
    ingredients: 'Two slices of cheddar or swiss cheese,Two slices of white bread,Two tablespoons of butter',
    recipe_id: 0,
    instructions: 'step_two',
    steps_audio_path: '../audio/stepTwo.mp3' },
   {
    id: 0,
    name: 'Grilled cheese sandwich',
    description: 'Indulge in an heavenly melt of cheese grilled in delicious slices',
    cooking_time: '10 mins',
    ingredients: 'Two slices of cheddar or swiss cheese,Two slices of white bread,Two tablespoons of butter',
    recipe_id: 0,
    instructions: 'step_one',
    steps_audio_path: '../audio/stepOne.mp3' },
   {
    id: 2,
    name: 'Grilled cheese sandwich',
    description: 'Indulge in an heavenly melt of cheese grilled in delicious slices',
    cooking_time: '10 mins',
    ingredients: 'Two slices of cheddar or swiss cheese,Two slices of white bread,Two tablespoons of butter',
    recipe_id: 0,
    instructions: 'step_three',
    steps_audio_path: '../audio/stepThree.mp3' }

]

let initialState = {
    id: 0,
    name: 'Grilled cheese sandwich',
    description: 'Indulge in an heavenly melt of cheese grilled in delicious slices',
    ingredients: 'Two slices of cheddar or swiss cheese,Two slices of white bread,Two tablespoons of butter',
    cooking_time: '10 mins',
    length: 0,
    currentStep:0,
    instructions:['step one', 'step two', 'step three'],
    steps_audio_path:['../audio/stepOne.mp3', '../audio/stepTwo.mp3', '../audio/stepThree.mp3']
  }

test('transformJoin transforms a join into initialState',  function (t) {
  const actual = transformJoin(seedData)

  t.deepEqual(actual, initialState)


  t.ok(true)
  t.end()
})
