export const initialState = {
  recipe:{
    id: 0,
    name: '',
    description: '',
    ingredients: '',
    cooking_time: '',
    length: 3,
    currentStep: 0,
    instructions:['step one', 'step two', 'step three'],
    audio_path:['../audio/stepOne.mp3', '../audio/stepTwo.mp3', '../audio/stepThree.mp3']
  }
}
