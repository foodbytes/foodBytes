import request from 'superagent'
import initialState from '../initialstate/initialstate.js'
import React from 'react'


export const recieveRecipeSteps = (state) => {
    console.log("recieve action creators")
    return {
        type: 'NEXT',
        payload: state
        //payload: find position in array and move to the next audio and play that
    }
}

export const fetchRecipeSteps = (id) => {
  console.log('Inside fetchRecipeSteps');
  return (dispatch) => {
    request
    .get(`/api/v1/recipes/1/steps`)
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(recieveRecipeSteps(JSON.parse(res.text)))
    })
  }
}


export const setState = (state) => {
  console.log('inside setstate ', state);
    return {
        type: 'setstate',
        state: state
    }
}
