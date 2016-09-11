import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Home from './Home'
import ContentsPage from './ContentsPage'
import RecipePage from './RecipePage'
import Audio from './Audio'
import App from './App'

module.exports = (

  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/contents" components={ContentsPage} />
    <Route path="/recipes" components={RecipePage} />
  </Route>

)
