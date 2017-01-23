// Webpack config to serve the component with bundled styles

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
    ],
  },
};
