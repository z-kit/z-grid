import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const sourcePath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');

export default {
  mode: (process.env.MIN === 'true') ? 'production' : 'none',
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
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader?sourceMap', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.module.css' }),
  ],
};
