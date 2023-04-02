const path = require('path')
const Dotenv = require('dotenv-webpack')

require('dotenv').config({
  path: path.resolve(path.join(__dirname, '../'), '.env')
})

module.exports = {
  resolve: {
    alias: {
      '@@': path.resolve(__dirname),
      '@': './app'
    },
    extensions: ['.ts', '.tsx', '.js', 'jsx']
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
          'ts-loader'
        ]
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: path.resolve(path.join(__dirname, '../'), '.env')
    })
  ]
}
