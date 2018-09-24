module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-import')(), // allows you to use @import
          require('autoprefixer')(), // adds vendor prefixes like -webkit or -moz to your css for better support
          require('postcss-custom-media')(), // can set media queries as variables
          require('postcss-custom-properties')(), // allows you to use css variables e.g. var(--my-variable)
          require('postcss-clean')(), // minifies the output css (i.e. removes all the spaces and comments)
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
}
