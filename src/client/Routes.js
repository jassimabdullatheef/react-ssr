import React from 'react'
import loadable from '@loadable/component'


import App from './App'
import UsersListPage from './pages/UsersListPage'
import HomePage from './pages/HomePage'

const DynamicUsers = loadable(() => import('./pages/DynamicUsers'), {
  fallback: <div>Loading...</div>,
});

export default [
  {
    ...App,
    routes: [
      { component: HomePage, path: '/', exact: true },
      { component: UsersListPage, path: '/users' },
      { component: DynamicUsers, path: '/dynamic-users' }
    ]
  }
]
