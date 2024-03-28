/**
 * @type {import('gatsby').GatsbyConfig}
 */
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
        url: `https://wprojects.algorithmicsterrassa.com/graphql`,
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
    `gatsby-plugin-emotion`,
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

    {
      resolve: `@ccalamos/gatsby-source-googlemaps-static`,
      options: {
        key: `AIzaSyBEKS2fj1nAFH3FnRBVvA9Zf7_OFKBQ4wM`,
        center: `41.568554, 2.009382`,
      },
    },
  ],
};
