exports.onCreateWebpackConfig = ({ actions }) => {
  const config = {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
    },
    module: {
      // configuration regarding modules
      rules: [
        // rules for modules (configure loaders, parser options, etc.)
        {
          test: /flickity/,
          loader: "imports-loader?define=>false&this=>window",
        },
      ],
    },
  }

  actions.replaceWebpackConfig(config)
}
