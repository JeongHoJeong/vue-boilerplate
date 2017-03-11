const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const config = require(path.resolve(__dirname, 'webpack.config.js'))

config.plugins = config.plugins || []

config.plugins.push(new webpack.DefinePlugin({
  PRODUCTION: JSON.stringify(true),
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
}))
config.plugins.push(new UglifyJsPlugin())

module.exports = config
