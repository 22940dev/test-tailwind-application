import React from 'react'

const Hero = () => {
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

export default Hero
