'use strict'

const path = require('path')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const root = path.resolve('./')

console.log(root)

module.exports = {
  entry: {
    userform: root + '/app/public/js/userform',
    signout: root + '/app/public/js/signout',
    reviewlist: root + '/app/public/js/reviewlist.js',
    restauranthomepage: root + '/app/public/js/restauranthomepage.js'
  },
  output: {
    path: root + '/app/public/js/',
    filename: '[name].min.js'
  },
  devtools: 'eval',
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
    new CommonsChunkPlugin('common.min.js', ['userform', 'signout', 'reviewlist', 'restauranthomepage'])
  ]
}
