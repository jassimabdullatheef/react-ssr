import React from 'react'

import HomePage from './pages/HomePage'
import App from './App'
import UserListPage from './pages/UsersListPage'

export default [
  {
    ...App,
    routes: [
      { ...HomePage, path: '/', exact: true },
      { ...UserListPage, path: '/users' }
    ]
  }
]
