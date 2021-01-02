/*
 * @Author: geekli
 * @Date: 2020-12-30 01:36:43
 * @LastEditTime: 2021-01-02 14:33:31
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './http'
import i18n from './i18n'
import store from './store'
import global from '@/utils/global'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI)  // 注册使用Element
Vue.use(api)  // 注册使用API模块

Vue.prototype.global = global // 挂载全局配置模块

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
})
