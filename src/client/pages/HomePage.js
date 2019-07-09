import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>This is crazy</h1>
        <button onClick={() => console.log('Hi ther!')}>Press Me</button>
      </div>
    )
  }
}

export default Home
