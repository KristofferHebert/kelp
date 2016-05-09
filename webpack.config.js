'use strict'

const path = require('path')
const webpack = require('webpack')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const root = path.resolve('./')

console.log(root)

module.exports = {
  entry: {
    userform: root + '/app/public/js/userform'
  },
  output: {
    path: root + '/app/public/js/',
    filename: '[name].min.js'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
    noParse: ['react']
  },
  plugins: [
    new CommonsChunkPlugin('common.min.js', ['userform'])
  ]
}
