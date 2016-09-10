import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import domready from 'domready'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { Router, Route, browserHistory } from 'react-router'
import Routes from './components/Routes'
import { syncHistoryWithStore, routerReducer} from 'react-router-redux'


let store = createStore(reducers, compose(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)

domready(() => {
  // console.log(store);
  ReactDOM.render(
      <Provider store={store}>
        <Router routes={Routes} history={history}>
        </Router>
      </Provider>,
    document.querySelector('#app')
  )
})
