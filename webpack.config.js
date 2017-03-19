const path = require('path')
const config = require(path.resolve(__dirname, 'webpack.base.config.js'))

const HtmlWebpackPlugin = require('html-webpack-plugin')

const plugins = config.plugins || []

plugins.push(new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'app/index.html')
}))

config.plugins = plugins

config.output = {
  path: path.resolve(__dirname, 'dist/web'),
  filename: 'bundle.js'
}

module.exports = config