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
      github: `https://github.com/danspratling`,
      instagram: `https://www.instagram.com/danspratling`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Jost`,
            variants: [`400`, `500`],
          },
        ],
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require('tailwindcss'), require('./tailwind.config.js')],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.join(__dirname, `src`, `content`),
      },
    },
  ],
}
