/*
 * @Author: geekli
 * @Date: 2020-12-31 17:59:23
 * @LastEditTime: 2021-01-01 01:25:12
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/http/modules/login.js
 */
import axios from '../axios'

/*
 * 系统登录模块
 */

// 登录
export const login = data => {
    return axios({
        url: 'login',
        method: 'post',
        data
    })
}

// 登出
export const logout = () => {
    return axios({
        url: 'logout',
        method: 'get'
    })
}
