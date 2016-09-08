import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import domready from 'domready'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/reducer.js'

// let store = createStore(reducers, compose(
//     applyMiddleware(thunk)
// ))



domready(() => {
  // console.log(store);
  ReactDOM.render(
      <App />,
    document.querySelector('#app')
  )
})
