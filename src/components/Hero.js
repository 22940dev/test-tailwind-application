import React from 'react'
import { Link, Corners } from '../components'

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center min-w-screen min-h-screen bg-gray-100 gradient">
      <Corners />
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-2">Dan Spratling</h1>
        <p className="text-xl mb-8">In love with great experiences</p>
        <Link to="#">Curious?</Link>
      </div>
    </div>
  )
}

export default Hero
