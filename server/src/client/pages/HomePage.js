import React from 'react'
import Navigation from '../components/Navigation'

const Home = () => {
  return (
    <div>
      <Navigation />
      <h1>This is crazy</h1>
      <button onClick={() => console.log('Hi ther!')}>Press Me</button>
    </div>
  )
}

export default {
  component: Home
}
