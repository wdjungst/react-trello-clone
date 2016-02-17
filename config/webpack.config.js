var webpack = require('webpack');
module.exports = {
  entry: {
    app: './app/index',
  },
  output: {
    path: __dirname + '/static/',
    filename: "[name].js",
    chunkFilename: "[id].chunk.js",
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};
