import React from 'react'
import ReactDOM from 'react-dom'
import domready from 'domready'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer} from 'react-router-redux'

import Home from './components/Home'
import Routes from './components/Routes'
import reducers from './reducers'

let store = createStore(reducers, compose(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)

domready(() => {
  ReactDOM.render(
      <Provider store={store}>
        <Router routes={Routes} history={history}>
        </Router>
      </Provider>,
    document.querySelector('#app')
  )
})
