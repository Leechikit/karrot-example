/*
 * @Description: 
 * @Autor: Lizijie
 * @Date: 2020-07-25 15:20:30
 * @LastEditors: Lizijie
 * @LastEditTime: 2020-07-25 16:13:57
 */ 
import Karrot from 'karrot'
import navComp from './lib/Nav'
import clickHandle from './lib/clickHandle'
Karrot.provide('paas', {
  navComp,
  clickHandle
})
