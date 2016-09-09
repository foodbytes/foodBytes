import request from 'superagent'
import initialState from '../initialstate/initialstate.js'
import React from 'react'

const NEXT = 'NEXT'
const PREVIOUS = 'PREVIOUS'
export {NEXT, PREVIOUS}

export const receiveRecipeSteps = (state) => {
    console.log("receive action creators")
    return {
        type: 'RECEIVE_RECIPE_STEPS',
        payload: state
        //payload: find position in array and move to the next audio and play that
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
