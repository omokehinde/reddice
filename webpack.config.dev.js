import path from 'path';
import webpack from 'webpack';

export default {
  // devtools: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js'),
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
    // new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
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
