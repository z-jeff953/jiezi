const path = require('path')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')

const config = {
  target: 'node',
  externals: [nodeExternals()], // 移除 node 模块不打包
}

module.exports = merge(baseConfig, config)
