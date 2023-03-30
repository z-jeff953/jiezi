const path = require('path')
const Dotenv = require('dotenv-webpack')

require('dotenv').config({
  path: path.resolve(path.join(__dirname, '../'), '.env')
})

module.exports = {
  resolve: {
    alias: {
      '@@': path.resolve(__dirname)
    }
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: path.resolve(path.join(__dirname, '../'), '.env')
    })
  ]
}
