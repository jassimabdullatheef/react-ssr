import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import Navigation from '../components/Navigation'

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  render() {
    return (
      <div>
        <Navigation />
        <h1>This is a big list of users</h1>
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

function getInitialProps(store) {
  return store.dispatch(fetchUsers())
}

export default {
  component: connect( mapStateToProps, { fetchUsers })(UsersList),
  getInitialProps
}
