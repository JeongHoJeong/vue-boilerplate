const path = require('path')
const config = require(path.resolve(__dirname, 'webpack.base.config.js'))

const HtmlWebpackPlugin = require('html-webpack-plugin')

config.entry = {
  main: path.resolve(__dirname, 'app/electron.js'),
  bundle: path.resolve(__dirname, 'app/index.ts')
}

const plugins = config.plugins || []

plugins.push(new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'app/index.electron.html'),
  inject: false
}))

config.plugins = plugins

config.output = {
  path: path.resolve(__dirname, 'dist/electron'),
  filename: '[name].js'
}

config.module.noParse = /electron\.js$/

module.exports = config