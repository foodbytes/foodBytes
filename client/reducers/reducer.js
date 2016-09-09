import initialState from './initialstate/initialstate'

export default function reducer (state = initialState, action) {
    switch (action.type){
      case "RECEIVE_RECIPE_STEPS":
        let newState = Object.assign({}, action.payload)
        console.log('this is the newState ',newState);
        return newState //change this
      case "NEXT":

      default:
        return state
    }
}
