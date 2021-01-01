/*
 * @Author: geekli
 * @Date: 2020-12-30 01:36:43
 * @LastEditTime: 2021-01-01 10:40:42
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
import global from '@/utils/global'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)  // 引入Element
Vue.use(api)  // 引入API模块

Vue.prototype.global = global // 挂载全局配置模块

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
