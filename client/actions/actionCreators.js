import { initialState } from '../initialstate/initialstate'
import request from 'superagent'

const START = 'start'
const NEXT = 'next'
const PREVIOUS = 'previous'
const REPEAT = 'repeat'
const STOP = 'stop'
const WHOLE_RECIPE = 'whole recipe'
const INGREDIENTS = 'ingredients'
const LISTENING = 'listening'
const RECEIVE_RECIPE_STEPS = 'RECEIVE_RECIPE_STEPS'
const RECEIVE_ALL_RECIPES = 'RECEIVE_ALL_RECIPES'

export { START, NEXT, PREVIOUS, REPEAT, STOP, WHOLE_RECIPE, LISTENING, INGREDIENTS, RECEIVE_RECIPE_STEPS, RECEIVE_ALL_RECIPES }

export const receiveRecipeSteps = (state) => {
    return {
        type: RECEIVE_RECIPE_STEPS,
        payload: state
    }
}

/* The will get all the recipes dispatch from the action creator*/
export const receiveAllRecipes = (state) => {
    return {
        type: RECEIVE_ALL_RECIPES,
        payload: state
    }
}

export const fetchRecipe = (id) => {
  return (dispatch) => {
    request
    .get(`/api/v1/recipes/${id}`)
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(receiveRecipeSteps(JSON.parse(res.text)))
    })
  }
}

export const fetchRecipes = () => {
  return (dispatch) => {
    request
    .get(`/api/v1/recipes`)
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(receiveAllRecipes(JSON.parse(res.text)))
    })
  }
}

export const startDispatch = (state) => {
  console.log("Inside start dispatch")
  return(dispatch) => {
    dispatch ({
      type: START,
      payload: state
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
    console.log("Inside repeatDispatch")
    return (dispatch) => {
      dispatch ({
        type: REPEAT,
        payload: state
      })
    }
}

export const stopDispatch = (state) => {
    console.log("Inside stopDispatch")
    return (dispatch) => {
      dispatch ({
        type: STOP,
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

export const listeningDispatch = (state) => {
    console.log("! listeningDispatch : listening:", state)
    return (dispatch) => {
      dispatch ({
        type: LISTENING,
        payload: state
      })
    }
}
