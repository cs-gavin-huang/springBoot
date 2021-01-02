/*
 * @Author: geekli
 * @Date: 2021-01-01 11:22:54
 * @LastEditTime: 2021-01-01 13:18:57
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/store/index.js
 */
import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

// 引入子模块
import app from './modules/app'
import user from './modules/user'
import menu from './modules/menu'

const store = new vuex.Store({
    modules: {
        app: app,
        user: user,
        menu: menu
    }
})

export default store
