const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath, distPath } = require('./path')

module.exports = {
  entry: {
    index: path.join(srcPath, 'index.js'),
    other: path.join(srcPath, 'other.js')
  },
  module: {
    rules: [
      // babel-loader
    ]
  },
  plugins: [
    // 多入口 - 生成 index.html
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index.html'),
      filename: 'index.html',
      // chunks 表示该页面要引用哪些 chunk (即上面的 index 和 other)
      chunks: ['index', 'vendor', 'common'] // 考虑代码分割
    }),
    // 多入口 - 生成 other.html
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'other.html'),
      filename: 'other.html',
      chunks: ['other', 'common']// 考虑代码分割
    })
  ]
}