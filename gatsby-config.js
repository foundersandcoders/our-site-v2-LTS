module.exports = {
  siteMetadata: {
    title: "Founders and Coders",
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "founders-and-coders-website",
        short_name: "fac",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "browser",
        // TODO: add site icon
        // icon: '', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("postcss-import")(), // allows you to use @import
          require("autoprefixer")(), // adds vendor prefixes like -webkit or -moz to your css for better support
          require("postcss-custom-media")(), // can set media queries as variables
          require("postcss-custom-properties")(), // allows you to use css variables e.g. var(--my-variable)
          require("postcss-clean")(), // minifies the output css (i.e. removes all the spaces and comments)
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        runtimeCaching: [
          {
            // Use cacheFirst since these don't need to be revalidated (same RegExp
            // and same reason as above)
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: `cacheFirst`,
          },
          {
            // Add runtime caching of various other page resources
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `staleWhileRevalidate`,
          },
          {
            // Google Fonts CSS (doesn't end in .css so we need to specify it)
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: `staleWhileRevalidate`,
          },
          {
            urlPattern: /\.mp4$/,
            handler: `networkFirst`,
          },
        ],
      },
    },
  ],
}
