import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = ({auth}) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users Preloaded</Link>
        </li>
        <li>
          <Link to="/dynamic-users">Users</Link>
        </li>
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Header)
