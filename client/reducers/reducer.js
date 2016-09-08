export default function reducer (state = {}, action) {
    switch (action.type){
      case "NEXT":
        let newState = Object.assign({}, action)
        console.log(newState);
        return newState //change this
      default:
        return state
    }
}
