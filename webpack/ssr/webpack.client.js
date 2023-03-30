const path = require('path')
const baseConfig = require('../webpack.base')
const { merge } = require('webpack-merge')

const config = {
  entry: './cli/ssr/client/index.js',
  output: {
    path: path.resolve(
      path.join(__dirname, '../../'),
      'dist/ssr/client'
    ),
    filename: 'bundle.js'
  }
}

module.exports = merge(baseConfig, config)
