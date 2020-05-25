import React from 'react'
import { graphql } from 'gatsby'

import { About, Hero, Layout, Portfolio, SEO, Social, Timeline } from '../components'

const IndexPage = ({ data }) => {
  //descructure our pagedata as js objects so we can use them
  const seo = data.site.siteMetadata

  //Render the page
  return (
    <Layout>
      <SEO
        title={seo.title}
        description={seo.description}
        // image={'/images/seo/home.png'}
      />
      <Hero />
      <About />
      <Timeline />
      <Portfolio />
      <div className="fixed bottom-0 left-0 w-full flex justify-center p-6 z-50">
        <Social />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default IndexPage
