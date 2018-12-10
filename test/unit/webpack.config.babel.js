import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  mode: 'none',
  entry: {
    js: [path.resolve(__dirname, './suite/index.js')],
  },
  output: {
    path: __dirname,
    filename: 'testBundle.js',
  },
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['null-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'],
  },
};
