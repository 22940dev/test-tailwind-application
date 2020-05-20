import React, { useState } from 'react'
import { Link } from '../components'

const Corners = () => {
  return (
    <div className="absolute w-full h-full flex flex-col justify-between p-12">
      <div className="flex-0">
        <div className="ml-auto mr-0 border-t-4 border-r-4 border-black" style={{ width: 60, height: 60 }}></div>
      </div>
      <div className="flex-0">
        <div className="mr-auto  border-b-4 border-l-4 border-black" style={{ width: 60, height: 60 }}></div>
      </div>
    </div>
  )
}

const Hero = () => {
  const [animateBackground, setAnimateBackground] = useState(0)
  const [animateContent, setAnimateContent] = useState(0)

  if (typeof window !== 'undefined') {
    document.addEventListener('scroll', () => {
      setAnimateBackground(window.pageYOffset * 0.01)
      setAnimateContent((window.pageYOffset - 300) * 0.01)
    })
  }

  return (
    <div className="relative flex items-center justify-center min-w-screen" style={{ height: '2vh', minHeight: 2000 }}>
      <div className="fixed top-0 w-full h-screen gradient" style={{ transform: `scale(${1 + animateBackground / 10})`, opacity: 1 - animateBackground / 3 }}>
        <Corners />
      </div>
      <div className="fixed top-0 min-h-screen flex items-center text-center z-20">
        <div style={{ opacity: 1 - animateContent / 3, marginTop: -animateContent * 7, paddingBottom: animateContent * 7 }}>
          <h1 className="text-5xl font-bold mb-2">Dan Spratling</h1>
          <p className="text-xl mb-8">In love with great experiences</p>
          <Link to="#">Curious?</Link>
        </div>
      </div>
    </div>
  )
}


export default Hero
