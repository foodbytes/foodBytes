export default function reducer (state = initialState, action) {
    switch (action.type){
      case ("NEXT"):
      initialState.recipe.currentStep++
      let newState = Object.assign({}, state)
      return newState //change this

      default:
        return state
    }
}
