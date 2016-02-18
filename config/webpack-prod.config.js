var webpack = require('webpack');
var path = require('path');
module.exports = {
  devtool: 'source-map',
  entry: {
    app: './app/index',
    board: './app/board'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: "[name].js",
    chunkFilename: "[id].chunk.js",
    publicPath: '/public/'
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
    extensions: ['', '.js', '.jsx']
  }
};
