const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const tsLintLoaderOptions = {
  configFile: path.resolve(__dirname, 'tslint.json'),
  tsConfigFile: path.resolve(__dirname, 'tsconfig.json'),
  emitErrors: true,
  failOnHint: true,
}

module.exports = {
  resolve: {
    modules: [
      path.resolve(__dirname, 'app'),
      'node_modules',
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
    extensions: ['.js', '.vue', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: tsLintLoaderOptions,
      },
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              ts: [
                { loader: 'ts-loader' },
                { loader: 'tslint-loader', options: tsLintLoaderOptions },
              ],
            },
          },
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader?importLoaders=1',
            {
              loader: 'postcss-loader',
              options: {
                plugins: function() {
                  return [
                    require('precss'),
                    require('autoprefixer'),
                  ]
                },
              },
            },
            'sass-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
}
