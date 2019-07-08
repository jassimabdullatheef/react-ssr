import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>This is crazy</h1>
      <button onClick={() => console.log('Hi ther!')}>Press Me</button>
    </div>
  )
}

export default {
  component: Home
}
