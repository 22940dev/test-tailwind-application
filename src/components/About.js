import React, { useRef, useState } from 'react'
import Image from 'gatsby-image'
import VisibilitySensor from 'react-visibility-sensor'
import { Link } from '../components'

const About = ({ image }) => {
  return (
    <VisibilitySensor partialVisibility={true} delayedCall={true}>
      {({ isVisible }) => {
        return (
          <div className="flex min-h-screen">
            <div className="w-2/3"></div>
            <div className="w-1/3">
              <Image fixed={image.fixed} className={`${imageClasses} ${!isVisible && imageInvisibleClasses}`} />
            </div>
          </div>
        )
      }}
    </VisibilitySensor>
  )
}

const imageClasses = 'rounded-full transition-all duration-1000'
const imageInvisibleClasses = '-m-r-32 opacity-0'

export default About
