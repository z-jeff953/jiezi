const path = require('path')
const baseServerConfig = require('../webpack.server')
const { merge } = require('webpack-merge')

const config = {
  entry: './cli/server/run.js',
  output: {
    path: path.resolve(path.join(__dirname, '../'), 'dist/server'),
    filename: 'index.js'
  }
}

module.exports = merge(baseServerConfig, config)
