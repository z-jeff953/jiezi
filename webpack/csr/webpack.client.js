const path = require('path')
const baseClientConfig = require('../webpack.client')
const { merge } = require('webpack-merge')

const config = {
  entry: './cli/csr/client/index.js',
  output: {
    path: path.resolve(
      path.join(__dirname, '../../'),
      'dist/csr/client'
    ),
    filename: 'bundle.js'
  }
}

module.exports = merge(baseClientConfig, config)
