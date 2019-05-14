module.exports = {
  siteMetadata: {
    title: 'SG Code Campus',
    description:
      "Learn Scratch, Python, JavaScript, Java, C++. Singapore's largest qualified full-time instructional team. Structured coding curriculum.",
    author: 'SG Code Campus',
    siteUrl: 'https://www.sgcodecampus.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'SG Code Campus',
        short_name: 'SGCC',
        start_url: '/',
        background_color: '#1B75BC',
        theme_color: '#F37021',
        display: 'standalone',
        icon: 'src/assets/images/cute-pom.jpg' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rules: [
          {
            test: /\.svg$/,
            include: /assets\/.*/
          }
        ]
      }
    },
    'gatsby-plugin-styled-components'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
