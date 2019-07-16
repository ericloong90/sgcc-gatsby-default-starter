/* eslint-disable */
/**
 * We need to disable eslint on this file because the package dotenv was installed by default by
 * Gatsby.
 * The following code allows us to load different env files depending on the environment,
 * be it development or production.
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

/**
 * We can access environment variables here via process.env.API_NAME_OR_KEY
 * This way, we can keep sensitive data outside of the commit history.
 */
// console.log(process.env.API_KEY);

module.exports = {
  siteMetadata: {
    title: 'SG Code Campus',
    description:
      "Learn Scratch, Python, JavaScript, Java, C++. Singapore's largest qualified full-time instructional team. Structured coding curriculum.",
    author: 'SG Code Campus',
    siteUrl: 'https://www.sgcodecampus.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-sharp',
    },
    {
      resolve: 'gatsby-plugin-sharp',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'SG Code Campus',
        short_name: 'SGCC',
        start_url: '/',
        background_color: '#1B75BC',
        theme_color: '#F37021',
        display: 'standalone',
        icon: 'src/assets/images/cute-pom.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rules: [
          {
            test: /\.svg$/,
            include: /assets\/.*/,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
