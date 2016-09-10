import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Home from './Home'
import ContentsPage from './ContentsPage'
import RecipePage from './RecipePage'
import Audio from './Audio'
import Layout from './Layout'

module.exports = (

  <Route path="/" component={Layout}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/contents" components={ContentsPage} />
  </Route>

)
