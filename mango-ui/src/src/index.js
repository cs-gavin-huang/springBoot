/*
 * @Author: geekli
 * @Date: 2021-01-01 11:22:54
 * @LastEditTime: 2021-01-01 11:23:56
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/src/index.js
 */
import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

// 引入子模块
import app from './modules/app'

const store = new vuex.Store({
    modules: {
        app: app
    }
})

export default store
