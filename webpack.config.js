const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, args) => {
  const { mode } = args
  const sourceMap = mode === 'development'

  return {
    entry: './src/index.ts',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader'
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap,
                modules: true
              }
            }
          ]
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 3000,
      open: 'chrome'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html')
      })
    ]
  }
}