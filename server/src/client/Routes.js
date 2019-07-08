import React from 'react'

import HomePage from './pages/HomePage'
import UserListPage from './pages/UsersListPage'

export default [
  { ...HomePage, path: '/', exact: true },
  { ...UserListPage, path: '/users' }
]
