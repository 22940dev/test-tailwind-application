import React from 'react'
// import { Footer } from '.'

const Layout = ({ children }) => {
  return (
    <>
      <main className="max-w-full overflow-hidden">{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
