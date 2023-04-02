const path = require('path')
const nodeExternals = require('webpack-node-externals')
const baseServerConfig = require('../webpack.server')
const { merge } = require('webpack-merge')

const config = {
  entry: './cli/csr/server/index.ts',
  output: {
    path: path.resolve(
      path.join(__dirname, '../../'),
      'dist/csr/server'
    ),
    filename: 'bundle.js'
  }
}

module.exports = merge(baseServerConfig, config)
