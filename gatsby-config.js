require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `fart agency`,
    description: `агентство по подбору актёров`,
    author: `vasily.guzov@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_API_URL,
        contentTypes: ["actor", "agent", "page", "setup"],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `fartt.ru`,
        start_url: `/`,
        background_color: `#f2849e`,
        theme_color: `#f2849e`,
        display: `minimal-ui`,
        icon: `src/images/fart-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
