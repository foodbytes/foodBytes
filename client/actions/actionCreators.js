import {initialState} from '../initialstate/initialstate.js'

const NEXT = 'NEXT'
const PREVIOUS = 'PREVIOUS'
const RECEIVE_RECIPE_STEPS = 'RECEIVE_RECIPE_STEPS'
export {NEXT, PREVIOUS, RECEIVE_RECIPE_STEPS}

export const receiveRecipeSteps = (state) => {
    console.log("receive action creators")
    console.log('this is the state inside receiveRecipeSteps', state);
    return {
        type: RECEIVE_RECIPE_STEPS,
        payload: state
    }
}

export const fetchRecipeSteps = (id) => {
  console.log('Inside fetchRecipeSteps');
  return (dispatch) => {
    request
    .get(`/api/v1/recipes/${id}/join`)
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(receiveRecipeSteps(JSON.parse(res.text)))
    })
  }
}

export const nextDispatch = () => {
    console.log("inside nextDispatch")
    return (dispatch) => {
      dispatch ({
        type: NEXT
      })
    }
}
