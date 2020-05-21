import React, { useRef, useState } from 'react'
import { Link } from '../components'
import VisibilitySensor from 'react-visibility-sensor'

const Portfolio = () => {
  const heroEl = useRef(null)
  const [animateBackground, setAnimateBackground] = useState(0)

  return (
    <VisibilitySensor partialVisibility={true} delayedCall={true}>
      {({ isVisible }) => {
        if (typeof window !== 'undefined' && isVisible) {
          document.addEventListener('scroll', () => {
            setAnimateBackground((window.pageYOffset - heroEl.current.offsetTop) * 0.01)
            // setAnimateContent((window.pageYOffset - 300) * 0.01)
          })
        }

        return (
          <div id="portfolio" ref={heroEl} className="relative flex items-center justify-center min-w-screen" style={{ height: '2vh', minHeight: 2000 }}>
            {isVisible ? (
              <>
                <div className="fixed top-0 w-full h-screen bg-black" style={{ opacity: animateBackground / 3 }}></div>
                <div className="fixed top-0 min-h-screen w-full flex items-center text-center z-20">
                  <div className="max-w-2xl mx-auto" style={{ opacity: animateBackground / 4 - 0.5 }}>
                    <h1 className="text-4xl text-white font-bold mb-2">Having a good time?</h1>
                    <p className="text-xl text-gray-300 mb-8">
                      Don't worry, there's plenty more for you to look at. I've got a portfolio site too, designed for freelancing (and blogging). Made to{' '}
                      <strong>wow</strong>.
                    </p>
                    <Link to="https://danspratling.dev" secondary>
                      Don't stop me now
                    </Link>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        )
      }}
    </VisibilitySensor>
  )
}

export default Portfolio
