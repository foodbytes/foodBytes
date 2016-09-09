import initialState from '../initialstate/initialstate'
import {NEXT, PREVIOUS, RECEIVE_RECIPE_STEPS} from '../actions/actionCreators'

export default (state = initialState, action) => {
    switch (action.type){
      case RECEIVE_RECIPE_STEPS:
        let apiData = action.payload
        let length = apiData.instructions.length
        let newState = [...state.recipe, apiData]
        console.log('this is the newState ',newState);
        return Object.assign({}, state, {length: length})
      default:
        console.log('this is the default');
        return state
    }
}
