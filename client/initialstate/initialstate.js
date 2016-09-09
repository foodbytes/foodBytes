export const INITIAL_STATE = {

  recipe:{
    id: 0,
    name: 'Grilled cheese sandwich',
    description: 'Indulge in an heavenly melt of cheese grilled in delicious slices',
    ingredients: 'Two slices of cheddar or swiss cheese,Two slices of white bread,Two tablespoons of butter',
    cooking_time: '10 mins',
    length: 0,
    currentStep:0,
    instructions:['step one', 'step two', 'step three'],
    audio_path:['../audio/stepOne.mp3', '../audio/stepTwo.mp3', '../audio/stepThree.mp3']
  }
}
