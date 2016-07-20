const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/i,
        loader: 'babel',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(path.join(__dirname, 'src'), 'index.html'),
      hash: true,
      inject: 'body'
    })
  ]
}
