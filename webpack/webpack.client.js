const path = require('path')
const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

require('dotenv').config({
  path: path.resolve(path.join(__dirname, '../'), '.env')
})

const PORT = process.env.PORT || 3006

const config = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './cli/csr/client/public.html'
    })
  ]
}

module.exports = merge(baseConfig, config)
