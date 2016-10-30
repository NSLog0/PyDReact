const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

const config = require('./webpack.config.base.js')

config.entry = [
  'webpack-dev-server/client?http://0.0.0.0:8080',
  'webpack/hot/only-dev-server',
  './assets/index'
];

// static file for webpack bundle file
config.output.publicPath = 'http://0.0.0.0:8080/assets/bundles/';

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new BundleTracker({
    filename: './webpack-stats.json'
  }),
])

config.module.loaders.push({
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loaders: ['react-hot', 'jsx?harmony', 'babel'],
  include: [
    path.join(__dirname, './assets'),
    path.join(__dirname, './public')
  ]
})

module.exports = config
