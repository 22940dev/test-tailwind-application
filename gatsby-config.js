const path = require(`path`)
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Dan Spratling - You know you want me`,
    description: ``,
    baseUrl: `danspratling.dev`,
    author: `@dan_spratling`,
    socials: {
      twitter: `https://twitter.com/dan_spratling`,
      github: `https://github.com/danspratling/tailwind-application`,
      instagram: `https://www.instagram.com/danspratling`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Jost`,
            variable: true,
            weights: [`400`, `500`],
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require('tailwindcss'), require('./tailwind.config.js')],
      },
    },
  ],
}
