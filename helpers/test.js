const transformJoin = require('./transformjoin')

let test = require('tape')

let seedData = [
  {
    id: 0,
    name: 'Grilled cheese sandwich',
    description: 'Indulge in an heavenly melt of cheese grilled in delicious slices',
    notes:'Cheddar cheese with brown bread works as well',
    cooking_time: '10 mins',
    ingredients: 'Two slices of cheddar or swiss cheese@Two slices of white bread@Two tablespoons of butter',
    length: 3,
    whole_recipe_audio_path:'../audio/grilledCheese/wholeRecipe.mp3',
    ingredients_audio_path:'../audio/grilledCheese/ingredients.mp3',
    recipeList_image_path:'../images/grilled_cheese_border_p.png',
    recipePage_image_path: '../images/grilled_cheese_hushed.png',
    instructions: 'step one',
    steps_audio_path: '../audio/stepOne.mp3'
  },
  {
    id: 0,
    name: 'Grilled cheese sandwich',
    description: 'Indulge in an heavenly melt of cheese grilled in delicious slices',
    notes:'Cheddar cheese with brown bread works as well',
    cooking_time: '10 mins',
    ingredients: 'Two slices of cheddar or swiss cheese@Two slices of white bread@Two tablespoons of butter',
    length: 3,
    whole_recipe_audio_path:'../audio/grilledCheese/wholeRecipe.mp3',
    ingredients_audio_path:'../audio/grilledCheese/ingredients.mp3',
    recipeList_image_path:'../images/grilled_cheese_border_p.png',
    recipePage_image_path: '../images/grilled_cheese_hushed.png',
    instructions: 'step two',
    steps_audio_path: '../audio/stepTwo.mp3'
  },
  {
    id: 0,
    name: 'Grilled cheese sandwich',
    description: 'Indulge in an heavenly melt of cheese grilled in delicious slices',
    notes:'Cheddar cheese with brown bread works as well',
    cooking_time: '10 mins',
    ingredients: 'Two slices of cheddar or swiss cheese@Two slices of white bread@Two tablespoons of butter',
    length: 3,
    whole_recipe_audio_path:'../audio/grilledCheese/wholeRecipe.mp3',
    ingredients_audio_path:'../audio/grilledCheese/ingredients.mp3',
    recipeList_image_path:'../images/grilled_cheese_border_p.png',
    recipePage_image_path: '../images/grilled_cheese_hushed.png',
    instructions: 'step three',
    steps_audio_path: '../audio/stepThree.mp3'
  }
]

let initialState = {
  id: 0,
  name: 'Grilled cheese sandwich',
  description: 'Indulge in an heavenly melt of cheese grilled in delicious slices',
  notes:'Cheddar cheese with brown bread works as well',
  cooking_time: '10 mins',
  ingredients: 'Two slices of cheddar or swiss cheese@Two slices of white bread@Two tablespoons of butter',
  length: 3,
  whole_recipe_audio_path:'../audio/grilledCheese/wholeRecipe.mp3',
  ingredients_audio_path:'../audio/grilledCheese/ingredients.mp3',
  recipeList_image_path:'../images/grilled_cheese_border_p.png',
  recipePage_image_path: '../images/grilled_cheese_hushed.png',
  instructions:['step one', 'step two', 'step three'],
  steps_audio_path:['../audio/stepOne.mp3', '../audio/stepTwo.mp3', '../audio/stepThree.mp3']
}

test('transformJoin transforms a join into initialState',  function (t) {
  const actual = transformJoin(seedData)

  t.deepEqual(actual, initialState)


  t.ok(true)
  t.end()
})
