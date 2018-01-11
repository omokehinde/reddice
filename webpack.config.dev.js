import path from 'path';
import webpack from 'webpack';

export default {
  // devtools: 'eval-source-map',
  entry: [
    // 'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js'),
  ],
  output: {
    path: '/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
    // new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: [ 'babel-loader' ]
      }
    ]
  },
  resolve: {
    extensions: [ '.js' ]
  }
}
