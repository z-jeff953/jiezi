const path = require('path')
const nodeExternals = require('webpack-node-externals')
const baseServerConfig = require('../webpack.server')
const { merge } = require('webpack-merge')
const CopyPlugin = require('copy-webpack-plugin')

const config = {
  entry: './cli/ssr/server/index.js',
  output: {
    path: path.resolve(
      path.join(__dirname, '../../'),
      'dist/ssr/server'
    ),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public', to: '.' }]
    })
  ]
}

module.exports = merge(baseServerConfig, config)
