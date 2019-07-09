import React from 'react'

import HomePage from './pages/HomePage'
import App from './App'
import UserListPage from './pages/UsersListPage'

export default [
  {
    ...App,
    routes: [
      { component: HomePage, path: '/', exact: true },
      { component: UserListPage, path: '/users' }
    ]
  }
]
