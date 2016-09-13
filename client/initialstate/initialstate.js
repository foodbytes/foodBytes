export const initialState = {
  recipe:{
    id: 0,
    name: '',
    description: '',
    ingredients: '',
    cooking_time: '',
    length: 0,
    currentStep: 0,
    instructions:[],
    audio_path:[],
    whole_recipe_ingredients_audio_path: '',
    playing: false,
    listening: false
  },
  routing: { locationBeforeTransitions: null }
}
