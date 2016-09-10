import {combineReducers} from 'redux'
import {recipe} from './reducer'
import {routerReducer} from 'react-router-redux'

export default combineReducers({
    recipe: recipe,
    routing: routerReducer
})
