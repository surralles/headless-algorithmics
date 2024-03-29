/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `Algorithmics Headless Weby`,

    siteUrl: `https://wprojects.algorithmicsterrassa.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Frank Ruhl Libre\:400,700 `,
          `Poppins\:200,400,500`, // you can also specify font weights and styles, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://wp-headless-project.local/graphql`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [
          `limelight`,
          `Frank Ruhl Libre\:400,700 `,
          `Poppins\:200,400,500`, // you can also specify font weights and styles
        ],
        display: 'swap',
        attributes: {
          rel: 'stylesheet preload prefetch',
        },
      },
    }, // Needed for dynamic images
  ],
};
