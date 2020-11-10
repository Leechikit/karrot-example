/*
 * @Description: 
 * @Autor: Lizijie
 * @Date: 2020-08-24 11:31:22
 * @LastEditors: Lizijie
 * @LastEditTime: 2020-11-10 11:15:28
 */
const webpack = require('webpack')
const path = require('path')
const packageMap = require('../karrot.config')
module.exports = {
  pages: {
    index: {
      entry: [
        packageMap[process.env.PROJECT_ENV]
          ? path.join('node_modules', packageMap[process.env.PROJECT_ENV])
          : '',
        'src/main.js'
      ].filter(item => item)
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.PROJECT_ENV': JSON.stringify(process.env.PROJECT_ENV)
      })
    ]
  },
  chainWebpack: config => config.resolve.symlinks(false)
}
