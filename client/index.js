import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import domready from 'domready'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index.js'
import { Router, Route, browserHistory } from 'react-router'
import Routes from './components/Routes'
import { syncHistoryWithStore, routerReducer} from 'react-router-redux'

let store = createStore(reducer, compose(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)

domready(() => {
  // console.log(store);
  ReactDOM.render(
      <Provider store={store}>
        <Router routes={Routes} history={browserHistory}>
        </Router>
      </Provider>,
    document.querySelector('#app')
  )
})
