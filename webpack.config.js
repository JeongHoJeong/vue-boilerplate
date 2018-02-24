const path = require('path')
const config = require(path.resolve(__dirname, 'webpack.base.config.js'))
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

const plugins = config.plugins || []

if (!process.env.TARGET || process.env.TARGET === 'web') {
  console.log('Build target: Web')

  config.entry = path.resolve(__dirname, 'app/index.ts')

  config.output = {
    path: path.resolve(__dirname, 'dist/web'),
    filename: 'bundle.js',
  }

  plugins.push(new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'app/index.html'),
  }))
} else if (process.env.TARGET === 'electron') {
  console.log('Build target: Electron')

  config.entry = {
    main: path.resolve(__dirname, 'app/electron.js'),
    bundle: path.resolve(__dirname, 'app/index.ts'),
  }

  config.output = {
    path: path.resolve(__dirname, 'dist/electron'),
    filename: '[name].js',
  }

  plugins.push(new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'app/index.electron.html'),
    inject: false,
  }))

  config.module.noParse = /electron\.js$/
} else {
  throw new Error('Invalid build target.')
}

config.plugins = plugins

if (process.env.PROD || process.env.PRODUCTION) {
  console.log('Build mode: Production')

  config.plugins = config.plugins || []

  config.plugins.push(new webpack.DefinePlugin({
    PRODUCTION: JSON.stringify(true),
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }))
  config.plugins.push(new UglifyJsPlugin())
} else {
  console.log('Build mode: Development')
}

module.exports = config
