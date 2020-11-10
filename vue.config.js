/*
 * @Description: 
 * @Autor: Lizijie
 * @Date: 2020-07-25 16:06:10
 * @LastEditors: Lizijie
 * @LastEditTime: 2020-08-24 11:33:01
 */
const prodConfig = require('./build/prod')
const devConfig = require('./build/dev')

module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig
