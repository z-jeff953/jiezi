const path = require('path')
const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}

module.exports = merge(baseConfig, config)
