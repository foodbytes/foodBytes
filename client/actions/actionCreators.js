import { initialState } from '../initialstate/initialstate.js'
import request from 'superagent'

const NEXT = 'next'
const PREVIOUS = 'previous'
const REPEAT = 'repeat'
const WHOLE_RECIPE = 'whole recipe'
const INGREDIENTS = 'ingredients'
const RECEIVE_RECIPE_STEPS = 'RECEIVE_RECIPE_STEPS'
export { NEXT, PREVIOUS, REPEAT, RECEIVE_RECIPE_STEPS }

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
    .get(`/api/v1/recipes/${id}`)
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(receiveRecipeSteps(JSON.parse(res.text)))
      // in this case, the doLater = the speech recognition thing that should be activated
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

export const repeatDispatch = (state) => {
    console.log("Inside previousDispatch")
    return (dispatch) => {
      dispatch ({
        type: REPEAT,
        payload: state
      })
    }
}

export const wholeRecipeDispatch = (state) => {
    console.log("Inside wholeRecipeDispatch")
    return (dispatch) => {
      dispatch ({
        type: WHOLE_RECIPE,
        payload: state
      })
    }
}

export const ingredientsDispatch = (state) => {
    console.log("Inside ingredientsDispatch")
    return (dispatch) => {
      dispatch ({
        type: INGREDIENTS,
        payload: state
      })
    }
}
