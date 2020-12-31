/*
 * @Author: geekli
 * @Date: 2020-12-30 01:36:43
 * @LastEditTime: 2020-12-31 09:35:50
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import NotFound from '@/views/404'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/404',
      name: 'notFound',
      component: NotFound
    }
  ]
})
