/*
 * @Description:
 * @Autor: Lizijie
 * @Date: 2020-07-25 15:14:53
 * @LastEditors: Lizijie
 * @LastEditTime: 2020-11-10 16:14:28
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Karrot from 'karrot'

console.log(process.env.PROJECT_ENV)
Vue.config.productionTip = false
Vue.use(Karrot)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
