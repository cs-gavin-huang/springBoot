/*
 * @Author: geekli
 * @Date: 2020-12-31 17:59:32
 * @LastEditTime: 2021-01-01 01:25:19
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/http/modules/loginlog.js
 */
import axios from '../axios'

/*
 * 操作日志模块
 */

// 删除
export const batchDelete = (data) => {
    return axios({
        url: '/loginlog/delete',
        method: 'post',
        data
    })
}
// 分页查询
export const findPage = (data) => {
    return axios({
        url: '/loginlog/findPage',
        method: 'post',
        data
    })
}
