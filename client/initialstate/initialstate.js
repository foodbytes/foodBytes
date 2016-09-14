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
    steps_audio_path:[],
    ingredients_audio_path: '',
    whole_recipe_audio_path: '',
    active_audio_path: null,
    playing: false,
    listening: false,
  },
  routing: { locationBeforeTransitions: null }
}
