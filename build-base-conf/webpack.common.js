const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath, distPath } = require('./path')

module.exports = {
  entry: path.join(srcPath, 'index'),
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        include: srcPath,
        exclude: /node_modules/
      },
      // {
      //   test: /\.css$/,
      //   // loader 的执行顺序是: 从后往前
      //   loader: ['style-loader', 'css-loader']
      // },
      {
        test: /\.css$/,
        // loader 的执行顺序是: 从后往前
        loader: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        // 增加 'less-loader', 注意顺序
        loader: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index.html'),
      filename: 'index.html'
    })
  ]
}