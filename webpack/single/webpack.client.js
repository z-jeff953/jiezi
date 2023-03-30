const path = require('path')
const baseClientConfig = require('../webpack.client')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

require('dotenv').config({
  path: path.resolve(path.join(__dirname, '../'), '.env')
})

const PORT = process.env.PORT || 3006

const config = {
  entry: './cli/csr/client/index.js',
  output: {
    path: path.resolve(path.join(__dirname, '../../'), 'dist/client'),
    filename: 'bundle.js'
  },
  devServer: {
    port: PORT
  }
}

module.exports = merge(baseClientConfig, config)
