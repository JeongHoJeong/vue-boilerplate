const chalk = require('chalk')
const path = require('path')

const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

function configBuilder(env = {}) {
  const config = require(path.resolve(__dirname, 'webpack.base.config.js'))
  const plugins = config.plugins || []
  const buildOptions = {}

  if (!env.target || env.target === 'web') {
    buildOptions.target = 'Web'

    config.entry = path.resolve(__dirname, 'app/index.ts')

    config.output = {
      path: path.resolve(__dirname, 'dist/web'),
      filename: 'bundle.js',
    }

    plugins.push(new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app/index.html'),
    }))
  } else if (env.target === 'electron') {
    buildOptions.target = 'Electron'

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

  if (env.production) {
    buildOptions.mode = 'Production'

    config.plugins = config.plugins || []

    config.plugins.push(new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }))
    config.plugins.push(new UglifyJsPlugin())
  } else {
    buildOptions.mode = 'Development'
  }

  console.log(chalk`{bold Build information}`)
  console.log(chalk`{green .. Target: }{bold ${buildOptions.target}}`)
  console.log(chalk`{green .. Mode:   }{bold ${buildOptions.mode}}`)

  return config
}

module.exports = configBuilder
