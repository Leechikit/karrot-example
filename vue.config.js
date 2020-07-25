/*
 * @Description:
 * @Autor: Lizijie
 * @Date: 2020-07-25 16:06:10
 * @LastEditors: Lizijie
 * @LastEditTime: 2020-07-25 16:18:36
 */
const webpack = require('webpack')
module.exports = {
  chainWebpack: config => config.resolve.symlinks(false),
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.PROJECT_ENV': JSON.stringify(
          process.env.PROJECT_ENV || 'workflow'
        )
      })
    ]
  }
}
