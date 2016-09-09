import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import ContentsPage from './ContentsPage'
import RecipePage from './RecipePage'
import Audio from './Audio'

module.exports = (

<Route path="/" component={App}>
    <Route path="/contents" components={ContentsPage} />
</Route>

)

