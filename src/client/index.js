import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { renderRoutes } from 'react-router-config'
import axios from 'axios'
import Routes from './Routes'

const INITIAL_STATE = window.INITIAL_STATE || {}

const axiosInstance = axios.create({
  baseURL: '/api'
})

const store = createStore(reducers, INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)))

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
