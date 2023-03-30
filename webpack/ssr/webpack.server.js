const path = require('path')
const nodeExternals = require('webpack-node-externals')
const baseServerConfig = require('../webpack.server')
const { merge } = require('webpack-merge')

const config = {
  entry: './cli/ssr/server/index.js',
  output: {
    path: path.resolve(
      path.join(__dirname, '../../'),
      'dist/ssr/server'
    ),
    filename: 'bundle.js'
  }
}

module.exports = merge(baseServerConfig, config)
