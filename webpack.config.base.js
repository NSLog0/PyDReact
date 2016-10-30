const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: [
    './assets/index'
  ],
  output: {
    path: path.resolve('./assets/bundles/'),
    filename: '[name]-[hash].js'
  },

  plugins: [],

  module: {
    loaders: []
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  }
};
