import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import domready from 'domready'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/reducer.js'
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import Routes from './components/Routes'

let store = createStore(reducers, compose(
    applyMiddleware(thunk)
))



domready(() => {
  // console.log(store);
  ReactDOM.render(
      <Provider store={store}>
        <Router routes={Routes} history={browserHistory} />
      </Provider>,
    document.querySelector('#app')
  )
})
