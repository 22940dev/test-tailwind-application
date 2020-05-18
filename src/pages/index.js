import React from 'react'
import { graphql } from 'gatsby'

import { Hero, Layout, SEO } from '../components'

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
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        socials {
          twitter
          github
          instagram
        }
      }
    }
  }
`

export default IndexPage
