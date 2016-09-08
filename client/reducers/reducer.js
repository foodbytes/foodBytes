export default function reducer (state = {}, action) {
    switch (action.type){
      case "NEXT":
        return state //change this
      default:
        return action.state
    }
}
