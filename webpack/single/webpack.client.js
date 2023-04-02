const path = require('path')
const baseClientConfig = require('../webpack.client')
const { merge } = require('webpack-merge')

const PORT = process.env.PORT || 3006

const config = {
  entry: './cli/csr/client/index.tsx',
  output: {
    path: path.resolve(path.join(__dirname, '../../'), 'dist/client'),
    filename: 'bundle.js'
  },
  devServer: {
    port: PORT,
    historyApiFallback: true // 在使用单页面应用的时候，需要设置此参数，代表如果访问除根路径以外的地址，最终都会转向去请求根路径。
  }
}

module.exports = merge(baseClientConfig, config)
