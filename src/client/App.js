import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { fetchCurrentUser } from './actions/index'

import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}

function getInitialProps(dispatch) {
  return dispatch(fetchCurrentUser)
}

export default {
  component: App,
  getInitialProps
}
