import React, { useRef, useState } from 'react'
import { Link, Corners } from '../components'

const Hero = () => {
  const heroEl = useRef(null)
  const [animateBackground, setAnimateBackground] = useState(0)
  const [animateContent, setAnimateContent] = useState(0)

  document.addEventListener('scroll', () => {
    setAnimateBackground(window.pageYOffset * 0.01)

    if (window.pageYOffset <= 1000) {
      setAnimateContent((window.pageYOffset - 300) * 0.01)
    }

    console.log(animateBackground, animateContent)
    // console.log(heroEl.current)
  })

  return (
    <div ref={heroEl} className="relative flex items-center justify-center min-w-screen bg-gray-100" style={{ height: '2vh', minHeight: 2000 }}>
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
