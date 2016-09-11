import {initialState} from '../initialstate/initialstate.js'
import request from 'superagent'

const NEXT = 'next'
const PREVIOUS = 'previous'
const RECEIVE_RECIPE_STEPS = 'RECEIVE_RECIPE_STEPS'
export {NEXT, PREVIOUS, RECEIVE_RECIPE_STEPS}

export const receiveRecipeSteps = (state) => {
    console.log("Inside receiveRecipeSteps")
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

export const nextDispatch = (state) => {
    console.log("Inside nextDispatch")
    return (dispatch) => {
      dispatch ({
        type: NEXT,
        payload: state
      })
    }
}

export const previousDispatch = (state) => {
    console.log("Inside previousDispatch")
    return (dispatch) => {
      dispatch ({
        type: PREVIOUS,
        payload: state
      })
    }
}
