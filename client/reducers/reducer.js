export default function reducer (state = {}, action) {
    switch (action.type){
      case "RECIEVE_RECIPE_STEPS":
        let newState = Object.assign({}, action.payload)
        console.log('this is the newState ',newState);
        return newState //change this
      default:
        return state
    }
}
