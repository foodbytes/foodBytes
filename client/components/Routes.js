import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Home from './Home'
import RecipeList from './RecipeList'
import Recipe from './Recipe'
import Audio from './Audio'
import App from './App'

module.exports = (

  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/recipes" components={RecipeList} />
    <Route path="/recipes/:id" components={Recipe} />
  </Route>

)
