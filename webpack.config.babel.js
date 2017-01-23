import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const sourcePath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');

export default {
  entry: {
    js: [path.join(sourcePath, '/component.js')],
  },
  output: {
    path: distPath,
    filename: (process.env.MIN === 'true') ? 'index.min.js' : 'index.js',
    library: 'zgrid',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?sourceMap!postcss-loader',
        }),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
};
