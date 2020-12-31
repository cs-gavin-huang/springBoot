/*
 * @Author: geekli
 * @Date: 2020-12-31 17:58:22
 * @LastEditTime: 2021-01-01 01:26:01
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/http/api.js
 */
/*
 * 接口统一集成模块
 */
import * as login from './modules/login'
import * as user from './modules/user'
import * as dept from './modules/dept'
import * as role from './modules/role'
import * as menu from './modules/menu'
import * as dict from './modules/dict'
import * as config from './modules/config'
import * as log from './modules/log'
import * as loginlog from './modules/loginlog'


// 默认全部导出
export default {
    login,
    user,
    dept,
    role,
    menu,
    dict,
    config,
    log,
    loginlog
}